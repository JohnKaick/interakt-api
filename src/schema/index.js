const { makeExecutableSchema } = require('graphql-tools')
const merge = require('lodash.merge')

const product = require('./product')
const carrier = require('./carrier')
const delivery = require('./delivery')

module.exports = makeExecutableSchema({
    typeDefs: [
        product.types,
        carrier.types,
        delivery.types,
    ],
    resolvers: merge(
        product.resolvers,
        carrier.resolvers,
        delivery.resolvers,
    )
})
