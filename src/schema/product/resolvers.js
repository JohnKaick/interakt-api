const mongoose = require('mongoose')
const Product = mongoose.model('Product')

module.exports = {
    Query: {
        products: async (obj, args, ctx, info) => {
            const result = await Product.find({})
            return result
        },
    },
    Mutation: {
        createProduct: async (obj, args, ctx, info) => {
            return Product.create({
                description: args.input.description,
                price: args.input.price,
                createdAt: new Date()
            })
        },
        updateProduct: async (obj, args, ctx, info) => {
            return Product.findByIdAndUpdate(args.input._id, {
                description: args.input.description,
                price: args.input.price
            })
        },
        removeProduct: async (obj, args, ctx, info) => {
            return Product.findByIdAndRemove(args.input._id)
        },
    },
    Products: {
        all: async (products, args, ctx, info) => {
            return products
        },
        total: async (products, args, ctx, info) => {
            return products.length
        },
    }
}