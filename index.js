const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const  chatRouter  = require('./routes/chatRoutes');
const http = require('http')

// require the socket.io module
const io = require('socket.io');

require('./models/Product');
const  Chat  = require('./models/Chat');

const app = express();

app.use(bodyParser.json());

const socket = io(http);

const MONGODB_URI =  process.env.MONGODB_URI || ((process.env.NODE_ENV === 'test') ? 'mongodb://localhost:27017/save-the-bzz_test_db' : 'mongodb://localhost:27017/save-the-bzz');

mongoose.Promise = global.Promise;

mongoose.connect( MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true  });

app.use(bodyParser.json());

require('./routes/productRoutes')(app);

app.use("/chats", chatRouter);


socket.on("connection", socket  =>  {
	console.log("user connected");
	socket.on("disconnect", function() {
		console.log("user disconnected");
	});
	socket.on("chat message", function(msg) {
		console.log("message: "  +  msg);
		socket.broadcast.emit("received", { message: msg  });

		connect.then(db  =>  {
			console.log("connected correctly to the server");

			let  chatMessage  =  new Chat({ message: msg, sender: "Anonymous"});
			chatMessage.save();
		});
	});
});


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