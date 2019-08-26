module.exports = `
    type Carrier {
      _id: String
      name: String
    }

    extend type Query {
        carriers: [Carrier]
    }
`
