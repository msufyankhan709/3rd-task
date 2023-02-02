const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

// Set Template Engine
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use("/v1/api", require("./routes/history.routes"));

app.use("/", require("./routes/home.routes"));
app.use("/", require("./routes/home.routes"));

app.use("/v1/api", require("./routes/orderDetails.routes"));

const server = () => {
  try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
  } catch (error) {
    console.log("Server ERROR:->" + error);
  }
};
server();
