const express = require("express");
const axios = require("axios");
var cors = require("cors");
const app = express();
app.use(cors());
const port = 3000;

app.get("/", function(req, res) {
  axios
    .get(`https://api.smarkets.com/v3/events/?state=${req.query.state}&type=${req.query.type}`)
    .then(response => {
      res.json(response.data.events);
    })
    .catch(error => {
      console.log(error);
      res.json({ error: error });
    });
});

app.listen(port, function() {
  console.log(`CORS-enabled web server listening on port ${port}`);
});
