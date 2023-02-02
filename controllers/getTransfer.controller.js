// get History
// const api = require("../config/connectAPI");
// client = api.client;
const { SpotClient } = require("bitget-api");

const getTransferHistoryController = async (req, res) => {
  try {
    const client = new SpotClient({
      apiKey: req.query.apiKey,
      apiSecret: req.query.secretKey,
      apiPass: req.query.paraPhrase,
    });

    client
      .getTransferHistory({
        coinId: req.query.coinId,
        fromType: req.query.groupType,
        before: req.query.before,
        after: req.query.after,
        limit: req.query.limit,
      })
      .then((result) => {
        console.log("GET: TransferHistory", result);
        res.send(result);
      })
      .catch((err) => {
        console.error("ERROR: TransactionHistory: ", err);
        res.status(400).json({ error: "Something went wrong" });
      });
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};
//
module.exports = { getTransferHistoryController };
