const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes')

let url = 'mongodb+srv://Cluster77178:ZH1Wd2F4XXV6@cluster77178.iqtl6hq.mongodb.net/';
let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect(url, {dbName : "newDb"})
.then(() => {
    console.log("Connected to the database");
}, (errRes) => {
    console.log("Connection failed", errRes);
    process.exit();
});

let port = 8080;
app.listen(port, () => {
    console.log("Server is running on port " + port);
});

app.use("/", productRoutes)

