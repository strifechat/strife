var user = null;
var room = null;
var chat = null;

function Api(user_in, room_in, chat_in) {
	user = user_in;
	room = room_in;
	chat = chat_in;
};


Api.prototype.handleRequest = function(req, res, session) {

	console.log(req)

	var method = req['method']

	if (method == null || method == '')
		res.send('bad json request')

	if (method == 'getRooms') {
		room.getRooms(session, res)
	}

	if (method == 'getFriends') {
		console.log('in api: getFriends')
		user.getFriends(session.idusers, res)
	}

	if (method == 'sendFriendRequest') {
		user.sendFriendRequest(req['data'], session.idusers, res)
	}

	if (method == 'respondToFriendRequest') {
		user.respondToFriendRequest(req['data'], res)
	}

	if (method == 'loadChat') {
		console.log('in api: getchat')
		chat.loadChat(req['data'], session.idusers, res)
	}

	if (method == 'postToChat'){
		console.log('in api: postToChat')
		chat.postToChat(req['data'], session.idusers, res)
	}

	if (method == 'joinRoom'){
		console.log('in api: joinRoom')
		room.joinRoom(req['data'], session, res)
	}

	if (method == 'createRoom'){
		console.log('in api: createRoom')
		room.createRoom(req['data'], session, res)
	}

}


module.exports.Api = Api