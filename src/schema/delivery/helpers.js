
const formatDelivery = (delivery) => ({
    _id: delivery._id,
    address: delivery.address,
    carrier: delivery.carrier,
    status: delivery.status,
    date: `${delivery.date.getDay() < 10 ? '0' + delivery.date.getDay() : delivery.date.getDay()}/${delivery.date.getMonth() < 9 ? '0' + (delivery.date.getMonth() + 1) : delivery.date.getMonth()}/${delivery.date.getFullYear()}`,
    products: delivery.products,
    description: delivery.description,
})

const formatDeliveries = (deliveries) => (
    deliveries.map(formatDelivery)
)

module.exports = {
    formatDelivery,
    formatDeliveries
}
