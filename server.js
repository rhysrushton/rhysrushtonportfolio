// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
const Parallax = require('parallax-js')


// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;


// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("views"));


// Requiring our routes
require("./controller/router.js")(app);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });