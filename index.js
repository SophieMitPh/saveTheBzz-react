const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./models/Product');

const app = express();

const MONGODB_URI =  process.env.MONGODB_URI || ((process.env.NODE_ENV === 'test') ? 'mongodb://localhost:27017/save-the-bzz_test_db' : 'mongodb://localhost:27017/save-the-bzz');

mongoose.Promise = global.Promise;

mongoose.connect( MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true  });

app.use(bodyParser.json());

require('./routes/productRoutes')(app);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	const path = require('path');
	app.get('*', (req,res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`app running on port ${PORT}`)
});