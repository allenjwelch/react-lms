const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql'); 

// const path = require('path');
// const readConfig = require('read-config');
// const config = readConfig('./config.json');

const app = express();
const PORT = process.env.PORT || 8000;

// Define middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Add routes
const routes = require("./routes");
app.use(routes);

// app.get("/api", function(req, res) {
//     console.log("Users API");
// });

// Serve up static assets 
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});
