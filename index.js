//import
const express = require('express');
const cors = require('cors');

//implementasi
const app = express();
app.use(cors());

//import diletakkan disini (import admin)
const admin  = require('./routes/admin');
app.use("/store/admin", admin);

//import customer
const customer  = require('./routes/customer');
app.use("/store/customer", customer);


//import product
const product = require('./routes/product');
app.use("/product", product);


//import end-point letakkan disini
const transaksi = require('./routes/transaksi')//import
app.use("/transaksi", transaksi)//implementasi

app.listen(8080, () => {
    console.log('server run on port 8080');
})  