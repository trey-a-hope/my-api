const stripe = require('stripe');
const functions = require('firebase-functions');

/*
    RETRIEVE A COUPON
    https://stripe.com/docs/api/coupons/retrieve
*/

exports.retrieve = functions.https.onRequest((request, response) => {
    const apiKey = request.body.apiKey;
    const couponID = request.body.couponID;

    return stripe(apiKey).coupons.retrieve(
        couponID,
        (err, coupon) => {
            if (err) {
                response.send(err);
            } else {
                response.send(coupon);
            }
        }
    );
});