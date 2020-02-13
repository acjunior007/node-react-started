'use strict'

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB || `mongodb://localhost:27017/node-react-started`,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(status => console.log('Conected on mongoDb...'))
    .catch(err => console.log(`Error: ${err}`));

const port = process.env.port || 5000;

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`));