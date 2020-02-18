const stripe = require('stripe');
const functions = require('firebase-functions');

/*
    CREATE A ORDER
    https://stripe.com/docs/api/orders/create
*/

exports.create = functions.https.onRequest((request, response) => {
    const apiKey = request.body.apiKey;
    const customerID = request.body.customerID;
    const itemType = request.body.itemType;
    const itemParent = request.body.itemParent;
    const itemQuantity = request.body.itemQuantity;
    const metadata = request.body.metadata;

    return stripe(apiKey).orders.create(
        {
            currency: 'usd',
            customer: customerID,
            items: [
                {
                    type: itemType,
                    parent: itemParent,
                    quantity: itemQuantity
                }
            ],
            metadata: metadata
        },
        (err, order) => {
            if (err) {
                response.send(err);
            } else {
                response.send(order);
            }
        }
    );
});

/*
    LIST ALL ORDERS
    https://stripe.com/docs/api/orders/list
*/

exports.list = functions.https.onRequest((request, response) => {
    const apiKey = request.body.apiKey;
    const customerID = request.body.customerID;
    const status = request.body.status;

    return stripe(apiKey).orders.list(
        {
            customer: customerID,
            status: status,
        },
        (err, orders) => {
            if (err) {
                response.send(err);
            } else {
                response.send(orders);
            }
        }
    );
});

/*
    UPDATE AN ORDER
    https://stripe.com/docs/api/orders/update
*/

exports.update = functions.https.onRequest((request, response) => {
    const apiKey = request.body.apiKey;
    const orderID = request.body.orderID;
    const status = request.body.status;
    const carrier = request.body.carrier;
    const tracking_number = request.body.tracking_number;

    return stripe(apiKey).orders.update(
        orderID,
        {
            status: status,
            shipping: {
                carrier: carrier,
                tracking_number: tracking_number,
            }
        },
        (err, order) => {
            if (err) {
                response.send(err);
            } else {
                response.send(order);
            }
        }
    );
});

/*
    PAY AN ORDER
    https://stripe.com/docs/api/orders/pay
*/

exports.pay = functions.https.onRequest((request, response) => {
    const apiKey = request.body.apiKey;
    const orderID = request.body.orderID;
    const source = request.body.source;
    const customerID = request.body.customerID;

    return stripe(apiKey).orders.pay(
        orderID,
        {
            source: source,
            customer: customerID
        },
        (err, order) => {
            if (err) {
                response.send(err);
            } else {
                response.send(order);
            }
        }
    );
});