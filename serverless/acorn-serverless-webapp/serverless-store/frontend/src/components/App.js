import axios from 'axios';
import React, { Component } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

const apiAddress = 'https://ht3xa0px32.execute-api.us-east-1.amazonaws.com';
const stage = 'dev';

class App extends Component {

  constructor() {
    super();
    this.state = {
      products: [],
      ready: false,
      hasSaved: false
    };

    // bind the component's "this" to the callback
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
  }

  handleSelect(product) {
    // create a copy of the products array
    const products = this.state.products.slice();

    // find the index of the product to modify
    const index = products.map(i => i.id).indexOf(product.id);

    // modify the selection state
    products[index].isSelected = product.isSelected;

    // make React aware that the state has changed
    this.setState({ products: products });
  }

  handleDeselect(product) {
    this.handleSelect(product);
  }

  handleSave(products) {
    axios
      .post(`${apiAddress}/${stage}/store/save`, products)
      .then(res => {
        this.setState({
          products: this.state.products,
          hasSaved: true
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Serverless Store</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            {
              this.state.ready
                ?
                <div>
                  <h3>Products</h3>
                  <ProductList
                    products={this.state.products}
                    onSelect={this.handleSelect} />
                </div>
                :
                <div>
                  <span className="glyphicon glyphicon-refresh spin"></span>
                </div>
            }
          </div>
          <div className="col-md-4">
            <h3>Shopping Cart</h3>
            <ShoppingCart
              selectedProducts={this.state.products.filter(p => p.isSelected)}
              hasSaved={this.state.hasSaved}
              onDeselect={this.handleDeselect}
              onSave={this.handleSave} />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios
      .get(`${apiAddress}/${stage}/store/products`)
      .then(res => {
        this.setState({
          products: res.data.products,
          ready: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default App;
