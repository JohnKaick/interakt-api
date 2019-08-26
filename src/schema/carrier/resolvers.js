const mongoose = require('mongoose')
const Carrier = mongoose.model('Carrier')

module.exports = {
    Query: {
        carriers: async (obj, args, ctx, info) => {
            const result = await Carrier.find({})
            return result
        },
    }
}