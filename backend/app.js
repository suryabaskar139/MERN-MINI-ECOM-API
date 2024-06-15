const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');

const connectDb = require('./config/connectDb');
dotenv.config({path: path.join(__dirname,'config','config.env')})
const products = require('./routes/product');
const order = require('./routes/order');

connectDb();
app.use(express.json());
app.use('/api/v1/',products);
app.use('/api/v1/',order);

app.listen(process.env.PORT, () => {
    console.log(`Server Lisiting port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})