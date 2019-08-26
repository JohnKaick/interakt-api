const mongoose = require('mongoose')
require('mongoose-double')(mongoose);
const uri = 'mongodb://root:6468FK564DSA5899@ds053449.mlab.com:53449/bet';
mongoose.promiseLibrary = global.Promise;
mongoose.set('useCreateIndex', true)
mongoose.connect(uri, { useNewUrlParser: true }).then(() => {
    console.log('Mongodb is running in localhost')
});

const ProductSchema = mongoose.Schema({
    description: { type: String },
    price: { type: String },
    createdAt: Date,
}, { collection: 'product' });

const CarrierSchema = mongoose.Schema({
    name: { type: String },
}, { collection: 'carrier' });

const DeliverySchema = mongoose.Schema({
    address: { type: String },
    carrier: CarrierSchema,
    date: Date,
    status: { type: String }, // pending, delivered
    products: [ProductSchema],
    description: { type: String },
    createdAt: Date,
}, { collection: 'delivery' });

mongoose.model('Product', ProductSchema);
mongoose.model('Carrier', CarrierSchema);
mongoose.model('Delivery', DeliverySchema);

const { GraphQLServer } = require('graphql-yoga')
const schema = require('./src/schema')

const server = new GraphQLServer({
    schema,
})

server.start(() => console.log('Server is running on localhost:4000'))
