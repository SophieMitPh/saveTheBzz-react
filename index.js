const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const MONGODB_URI =  process.env.MONGODB_URI || ((process.env.NODE_ENV === 'test') ? 'mongodb://localhost:27017/save-the-bzz_test_db' : 'mongodb://localhost:27017/save-the-bzz');

mongoose.Promise = global.Promise;

mongoose.connect( MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true  });

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`app running on port ${PORT}`)
});