const homeController = (req, res) => {
  res.render("index");
};
const orderViewController = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.render("order");
};
module.exports = { homeController, orderViewController };
