const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.get("/status", (req, res) => {
  res.send({
    message: "Hello World"
  });
});

app.listen(process.env.PORT || 8082);

console.log("Hello all...");
