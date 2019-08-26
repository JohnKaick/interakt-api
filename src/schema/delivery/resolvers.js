const mongoose = require('mongoose')
const Delivery = mongoose.model('Delivery')
const Product = mongoose.model('Product')
const Carrier = mongoose.model('Carrier')
const { formatDeliveries } = require('./helpers')

module.exports = {
    Query: {
        deliveries: async (obj, args, ctx, info) => {
            const result = await Delivery.find({})
            return formatDeliveries(result)
        },
    },
    Mutation: {
        createDelivery: async (obj, args, ctx, info) => {
            let dateSplit = args.input.date.split('/')
            let newDate = new Date(dateSplit[2], dateSplit[1] - 1, dateSplit[0])
            let newProducts = []
            const carrier = await Carrier.findOne({ _id: args.input.carrier })
            for (let p of args.input.products) {
                let product = await Product.findOne({ _id: p })
                newProducts.push(product)
            }
            return Delivery.create({
                address: args.input.address,
                carrier: carrier,
                date: newDate,
                status: 'pending',
                products: newProducts,
                description: args.input.description,
                createdAt: new Date()
            })
        },
        updateDelivery: async (obj, args, ctx, info) => {
            const delivery = await Delivery.findOne({ _id: args.input._id })
            let changeAddress = false
            if (delivery.address !== args.input.address) {
                changeAddress = true
            } else {
                changeAddress = false
            }
            return Delivery.findByIdAndUpdate(args.input._id, {
                address: args.input.address,
                status: changeAddress ? 'pending' : args.input.status,
                description: args.input.description,
            })
        },
        removeDelivery: (obj, args, ctx, info) => {
            return Delivery.findByIdAndRemove(args.input._id)
        }
    },
    Deliveries: {
        all: async (deliveries, args, ctx, info) => {
            return deliveries
        },
        total: async (deliveries, args, ctx, info) => {
            return deliveries.length
        },
    }
}