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

const mongoose = require('mongoose');
console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI);
console.log('Connected to DB');

// app.get("/", (req, res) => {
//     console.log("Hello World!");
//     res.send("Hello World!");
// });

app.use(require('./routes/user.router'));

const server = http.createServer(app);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('Listening on port ' + port)
});