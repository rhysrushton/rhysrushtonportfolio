var path = require("path");

module.exports = function(app){
app.get("/", function(req, res) {
    // If the user already has an account send them to the members page

    res.sendFile(path.join(__dirname, "../index.html"));
  });
}; 
 