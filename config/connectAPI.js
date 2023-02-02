const dotenv = require("dotenv");
dotenv.config();
const { SpotClient } = require("bitget-api");
const client = new SpotClient({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.SECRETE_KEY,
  apiPass: process.env.PASS_PHRASE,
});
module.exports = { client };
