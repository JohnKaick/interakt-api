module.exports = `
    type Product {
      _id: String
      description: String
      price: String
    }

    type Products {
      all: [Product]
      total: Int
    }

    input CreateProductInput {
      description: String
      price: String
    }

    input UpdateProductInput {
      _id: String!
      description: String
      price: String
    }

    input RemoveProductInput {
      _id: String!
    }
    
    type Query {
      products: Products
    }

    type Mutation {
      createProduct(input: CreateProductInput!): Product
      updateProduct(input: UpdateProductInput!): Product
      removeProduct(input: RemoveProductInput!): Product
    }
`
