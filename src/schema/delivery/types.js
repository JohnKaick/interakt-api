module.exports = `
    type Delivery {
      _id: String
      address: String,
      carrier: Carrier
      date: String,
      status: String,
      products: [Product],
      description: String
    }

    type Deliveries {
      all: [Delivery]
      total: Int
    }

    input CreateDeliveryInput {
      address: String,
      carrier: String
      date: String,
      products: [String],
      description: String
    }

    input UpdateDeliveryInput {
      _id: String!
      address: String,
      status: String,
      description: String
    }    

    input RemoveDeliveryInput {
      _id: String!
    }
    
    extend type Query {
      deliveries: Deliveries
    }

    extend type Mutation {
      createDelivery(input: CreateDeliveryInput!): Delivery
      updateDelivery(input: UpdateDeliveryInput!): Delivery
      removeDelivery(input: RemoveDeliveryInput!): Delivery
    }
`
