var express = require("express");


var app = express();

app.use('/public', express.static(__dirname + '/public'));

var PORT = process.env.PORT || 1234;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ROUTER

require("./htmlRoutes")(app);


// LISTENER

app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });

module.exports = app;
