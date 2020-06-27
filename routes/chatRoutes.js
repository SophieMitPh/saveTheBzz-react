const mongoose = require('mongoose');
const Chats = require("./../models/Chat");

module.exports = (app) => {
	app.get(`/api/chats`, async (req, res) => {

		let chat = await Chats.find();
		return res.status(200).send(chat);
	});
};