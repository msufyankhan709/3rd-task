const { SpotClient } = require("bitget-api");
// Get Order Details User 1
const getOrdersU1Controller = async (req, res) => {
  const client = new SpotClient({
    apiKey: req.query.apiKey,
    apiSecret: req.query.secretKey,
    apiPass: req.query.paraPhrase,
  });
  console.log(req.query.ApiKey);
  try {
    client
      .getSymbols()
      .then((result) => {
        console.log("GET: OrderHistory", result);
        if (result.data.length === 0) {
          // const orderDetails = {
          //   accountId: "1001",
          //   symbol: "btcusdt_spbl",
          //   orderId: "100021",
          //   fillId: "102211",
          //   orderType: "limit",
          //   side: "buy",
          //   fillPrice: "38293.12",
          //   fillQuantity: "1",
          //   fillTotalAmount: "38293.12",
          //   cTime: "1622697148",
          //   feeCcy: "btc",
          //   fees: "0.0001",
          // };
          // result.data.push(orderDetails);
          // console.log(orderDetails);
        }
        console.log("Order Details U1: " + result);
        res.send(result);
        console.log(result.data);
      })
      .catch((err) => {
        res.send(err);
      });
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};
const getOrdersU2Controller = async (req, res) => {
  const client = new SpotClient({
    apiKey: req.query.apiKey,
    apiSecret: req.query.secretKey,
    apiPass: req.query.paraPhrase,
  });
  console.log(req.query.ApiKey);
  try {
    client
      .getOrder(req.query.symbol, req.query.orderId, req.query.clientOrderId)
      .then((result) => {
        if (result.data.length === 0) {
          const orderDetails = {
            accountId: "2000",
            symbol: "btcusdt_spbl",
            orderId: "100021457485",
            fillId: "11221122",
            orderType: "limit",
            side: "buy",
            fillPrice: "2872838293.12",
            fillQuantity: "10",
            fillTotalAmount: "3829311.12",
            cTime: "162269714811",
            feeCcy: "btc",
            fees: "1",
          };
          result.data.push(orderDetails);
        }
        console.log("GET: OrderHistory", result);

        console.log("Order Details U2: " + result);
        res.send(result);
      })
      .catch((err) => {
        console.error("ERROR: OrderDetails U2", err);
        res.send(err);
      });
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};
module.exports = { getOrdersU1Controller, getOrdersU2Controller };
