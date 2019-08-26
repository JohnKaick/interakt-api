const mongoose = require('mongoose')
require('mongoose-double')(mongoose);
const uri = 'mongodb://root:6468FK564DSA5899@ds053449.mlab.com:53449/bet';
mongoose.promiseLibrary = global.Promise;
mongoose.set('useCreateIndex', true)
mongoose.connect(uri, { useNewUrlParser: true }).then(() => {
    console.log('Mongodb is running in localhost')
});

const CarrierSchema = mongoose.Schema({
    name: { type: String },
}, { collection: 'carrier' });

const Carrier = mongoose.model('Carrier', CarrierSchema);

const createCarrier = async function () {

    await Carrier.create({
        name: 'Transportador 01'
    })

    await Carrier.create({
        name: 'Transp. 02'
    })

    return Carrier.create({
        name: 'Transportadora 03'
    })

}

createCarrier().then(() => {
    console.log('Creation of successful carriers.')
})
