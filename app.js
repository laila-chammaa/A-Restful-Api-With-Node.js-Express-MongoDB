const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

//helps handle the data from req.body, so we can console.log it
app.use(bodyParser.json());

//import routes
const postsRoute = require("./routes/posts");

//using middleware to get posts
app.use("/posts", postsRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("we're home?");
});

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to DB")
);

//listening to the server
app.listen(3000);
