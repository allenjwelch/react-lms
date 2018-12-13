const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql')
// const path = require('path');

const readConfig = require('read-config');
const config = readConfig('./config.json');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'react_lms'
});

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Add routes, both API and view
// app.use(routes);

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.get('/students', function (req, res) {
    connection.connect();

    connection.query('SELECT * FROM students LIMIT 0, 10', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
      console.log(results);
    });

    connection.end();
});

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cicerowned");

app.listen(PORT, function() {
    // console.log(config.app.bcClientSecret); // testing config file
    console.log('App listening on PORT ' + PORT);
});
