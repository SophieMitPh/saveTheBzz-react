const mongoose = require('mongoose');
const Chat = mongoose.model('chat');

module.exports = io => {
	io.on('connection', client => {
		Chat.find({})
			.sort({
				createdAt: -1
			})
			.limit(10)
			.then(chats => {
				client.emit('load all chats', chats.reverse());
			});

		console.log('new connection...');

		client.on('disconnect', () => {
			console.log('User is disconnected');
		});

		client.on('message', data => {
			let messageAttributes = {
					message: data.message,
					sender: data.sender,
				},
				m = new Chat(messageAttributes);
			m.save()
				.then(() => {
					io.emit('message',
						messageAttributes);
				})
				.catch(error => console.log(`error: ${error.message}`));
		});
	});
};