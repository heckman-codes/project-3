const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
var db = require("./models");
const app = express();
const PORT = process.env.PORT || 3001;


const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cookieParser());
// Add routes, both API and view
app.use(routes);

app.use((req, res, next) => {
  const token = req.cookies.token;

  if (token) {
    const { id } = jwt.verify(token, process.env.APP_SECRET);

    req.user = id;
  }

  next();
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/thelongway");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
