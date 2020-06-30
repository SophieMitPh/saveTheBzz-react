import axios from 'axios';

export default {
	getAll: async () => {
		let res = await axios.get(`/api/product`);
		return res.data || [];
	},

	getOne: async (id, data) => {
		let res = await axios.get(`/api/product/${id}`, data);
		return res.data || {};
	},

	newProduct: async (data) => {
		await axios.post(`/api/product`, data);
		console.log(data);
	},

	remove: async (id) => {
		await axios.delete(`/api/product/${id}`);
	},
	update: async (id, data) => {
		await axios.put(`/api/product/${id}`, data);
	}
}