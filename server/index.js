const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({ express: "hello from express" });
});

app.listen(port, () => console.log(`The server is listening on port ${port}`));
