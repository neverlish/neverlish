const products = [{
  _id: '12',
  name: 'GraphQL course',
  qty: 1
}, {
  _id: '13',
  name: 'Nodejs course',
  qty: 1
}]

export const resolvers = {
  Query: {
    allProduct() {
      return products
    }
  }
}
