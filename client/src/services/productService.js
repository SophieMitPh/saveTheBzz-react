import axios from 'axios';

export default {
	getAll: async () => {
		let res = await axios.get(`/api/product`);
		return res.data || [];
	},

	newProduct: async (data) => {
		let res = await axios.post(`/api/product`, data);
		console.log(data);
	}
}