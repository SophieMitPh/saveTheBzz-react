const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		description: {
			type: String,
			required: true
		},
	},
	{ timeStamps: true},
);

mongoose.model('products', productSchema);