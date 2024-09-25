const paypal = require("paypal-rest-sdk");
const dotenv = require("dotenv");

dotenv.config();

paypal.configure({
  mode: process.env.CLIENT_MODE,
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
});

module.exports = paypal;
