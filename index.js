'use strict'

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// import models
require('./models/Product');

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

// import routers
require('./routers/productRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}   



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`));