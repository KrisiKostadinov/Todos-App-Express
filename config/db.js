const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.URI;

console.log(url);

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }, () => console.log('Connected to db'));