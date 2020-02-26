const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Email = require('./email_functions');
const Algolia = require('./algolia_functions');
const StripeCard = require('./stripe/card_functions');
const StripeToken = require('./stripe/token_functions');
const StripeCustomer = require('./stripe/customer_functions');
const StripeCoupon = require('./stripe/coupon_functions');
const StripeCharge = require('./stripe/charge_functions');
const StripeSubscription = require('./stripe/subscription_functions');
const StripeOrder = require('./stripe/order_functions');
const StripeProduct = require('./stripe/product_functions');
const StripeSku = require('./stripe/sku_functions');

admin.initializeApp(functions.config().firebase);

//Algolia
exports.AlgoliaSyncHiddenGemsGemsIndex = Algolia.syncHiddenGemsGemsIndex;
exports.AlgoliaSyncHiddenGemsUsersIndex = Algolia.syncHiddenGemsUsersIndex;

//Email
exports.SendEmail = Email.sendEmail;

//Stripe Cards
exports.StripeCreateCard = StripeCard.create;
exports.StripeDeleteCard = StripeCard.delete;

//Stripe Charges
exports.StripeCreateCharge = StripeCharge.create;
exports.StripeListAllCharges = StripeCharge.listAll;
exports.StripeRetrieveCharge = StripeCharge.retrieve;

//Stripe Customers
exports.StripeCreateCustomer = StripeCustomer.create;
exports.StripeUpdateCustomer = StripeCustomer.update;
exports.StripeRetrieveCustomer = StripeCustomer.retrieve;
exports.StripeDeleteCustomer = StripeCustomer.delete;

//Stripe Coupons
exports.StripeRetrieveCoupon = StripeCoupon.retrieve;

//Stripe Orders
exports.StripeCreateOrder = StripeOrder.create;
exports.StripeListOrders = StripeOrder.list;
exports.StripeUpdateOrder = StripeOrder.update;
exports.StripePayOrder = StripeOrder.pay;

//Stripe Products
exports.StripeCreateProduct = StripeProduct.create;

//Stripe Skus
exports.StripeRetrieveSku = StripeSku.retrieve;

//Stripe Subscriptions
exports.StripeCreateSubscription = StripeSubscription.create;

//Stripe Tokens
exports.StripeCreateToken = StripeToken.create;
