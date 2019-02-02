var path = require("path");

// ROUTING

module.exports = function(app) {
  // HTML GET Requests
  
  app.get("/portfolio", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/portfolio.html"));
  });
  
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/about.html"));
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/contact.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/portfolio.html"));
  });
};
