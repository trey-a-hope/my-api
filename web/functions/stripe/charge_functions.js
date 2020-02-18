const stripe = require('stripe');
const functions = require('firebase-functions');

/*
    RETRIEVE A CHARGE
    Retreives a charge.
    PARAMS
    String chargeID;
*/
exports.retrieve = functions.https.onRequest((request, response) => {
    const apiKey = request.body.apiKey;
    const chargeID = request.body.chargeID;

    return stripe(apiKey).charges.retrieve(chargeID, (err, charge) => {
        if (err) {
            response.send(err);
        } else {
            response.send(charge);
        }
    });

});

/*
    CREATE A CHARGE
    Creates a new charge.
    PARAMS
    String chargeID;
*/
exports.create = functions.https.onRequest((request, response) => {
    const apiKey = request.body.apiKey;
    const amount = request.body.amount;
    const description = request.body.description;
    const customerID = request.body.customerID;

    return stripe(apiKey).charges.create({
        amount: amount,
        currency: "usd",
        customer: customerID,
        description: description
    }, (err, charge) => {
        if (err) {
            response.send(err);
        } else {
            response.send(charge);
        }
    });

});

/*
    LIST CHARGES
    List all charges to a customer.
    PARAMS
    String chargeID;
*/
exports.listAll = functions.https.onRequest((request, response) => {
    const apiKey = request.body.apiKey;
    const customerID = request.body.customerID;

    return stripe(apiKey).charges.list({ customer: customerID }, (err, charge) => {
        if (err) {
            response.send(err);
        } else {
            response.send(charge);
        }
    });

});