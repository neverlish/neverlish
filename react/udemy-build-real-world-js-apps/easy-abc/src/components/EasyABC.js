import React, {Component} from 'react';
import alphabets from '../alphabets.json';
import classNames from 'classnames';

class EasyABC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alphabets: alphabets,
      currentPosition: 0,
      currentTick: 0
    }

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next() {
    if (this.state.currentPosition === this.state.alphabets.length - 1) {
      if (this.state.currentTick < 2) {
        this.setState({currentTick: this.state.currentTick + 1});
      } else {
        this.setState({currentPosition: 0, currentTick: 0})
      }
    } else {
      if (this.state.currentTick < 2) {
        this.setState({currentTick: this.state.currentTick + 1});
      } else {
        this.setState({currentPosition: this.state.currentPosition + 1, currentTick: 0});
      }
    }
  }

  prev() {
    if (this.state.currentPosition > 0) {
      this.setState({currentPosition: this.state.currentPosition - 1});
    } else {
      this.setState({currentPosition: this.state.alphabets.length - 1});
    }
  }

  render() {
    let showImage = this.state.currentTick !== 0 ? true : false;
    let showWord = this.state.currentTick === 2 ? true : false;
    return (
      <div className='game'>
        <div className='option'>
          <div className='fields'>
            <div className='field-block'>
              {this.state.alphabets[this.state.currentPosition].letter}
            </div>
          </div>
          Current Position: {this.state.currentPosition}<br/>
          Current Tick: {this.state.currentTick}
          <div className='buttons'>
            <a onClick={this.prev} className='button prev'>Previous</a>
            <a className='button sound'>Play Sound Again</a>
            <a onClick={this.next} className='button next'>Next</a>
          </div>
          <div className='fields'>
            <div className='field-block'>
              <div className='left-field'>
                <div className={classNames('placeholder-span', {hide: showImage})}>Click Next to view Image</div>
                <img
                  className={classNames('letter-image', {hide: !showImage})}
                  alt={this.state.alphabets[this.state.currentPosition].word}
                  src={this.state.alphabets[this.state.currentPosition].image}/>
              </div>
              <div className='right-field'>
                <div className={classNames('placeholder-span', {hide: showWord})}>Click Next to view Spelling</div>
                <div className={classNames('word', {hide: !showWord})}>
                  {this.state.alphabets[this.state.currentPosition].word.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EasyABC;
