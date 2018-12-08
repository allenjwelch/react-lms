const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');


const readConfig = require('read-config');
const config = readConfig('./config.json');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// app.use(routes);

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }

app.listen(PORT, function() {
    // console.log(config.app.bcClientSecret); // testing config file
    console.log('App listening on PORT ' + PORT);
});
