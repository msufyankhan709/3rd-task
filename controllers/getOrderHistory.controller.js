// get History
// const api = require("../config/connectAPI");
const { SpotClient } = require("bitget-api");

// client = api.client;
const getOrderHistoryController = async (req, res) => {
  const client = new SpotClient({
    apiKey: req.query.apiKey,
    apiSecret: req.query.secretKey,
    apiPass: req.query.paraPhrase,
  });
  try {
    client
      .getSymbols()
      .then((result) => {
        res.send(result);
        console.log("GET: OrderHistory");
      })
      .catch((err) => {
        console.error("ERROR: Wrong Credentials OrderHistory");
        res.status(400).json({ error: "Something went wrong" });
      });
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};
module.exports = { getOrderHistoryController };
