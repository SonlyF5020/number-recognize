const express = require("express");
const cors = require("cors");
const estimate = require("./estimate");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);
app.use(cors());

app.post("/estimate", function(req, res) {
  console.log(JSON.stringify(req.body));
  res.send(estimate(req.body));
});

app.listen(8083, function() {
  console.log("Example app listening on port 8083!");
});
