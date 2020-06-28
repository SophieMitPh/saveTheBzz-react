import axios from 'axios';

export default {
	getAll: async () => {
		let res = await axios.get(`/api/product`);
		return res.data || [];
	},

	get: async (id, data) => {
		let res = await axios.get(`/api/product/${id}`, data);
		return res.data || {};
	},

	newProduct: async (data) => {
		let res = await axios.post(`/api/product`, data);
		console.log(data);
	},

	remove: async (id) => {
		await axios.delete(`/api/product/${id}`);
	},
	update: async (id, data) => {
		let res = await axios.put(`/api/product/${id}`, data);
		return res.data || {};
	}
}