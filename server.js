const http = require("http");
var express = require("express");
require('dotenv').config()
const cors = require("cors");

const app = express();
app.use(cors());
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


app.get("/", (req, res) => {
    console.log("Hello World!");
    res.send("Hello World!");
});

const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('Listening on port ' + port)
});