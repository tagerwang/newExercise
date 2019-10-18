 

var app = require('http').createServer(),
    io = require('socket.io')(app),
    clientCount = 0,
    PORT = 10088
app.listen(PORT);
io.on('connection', function(socket) {
    socket.on('userName', function(data) {
        console.log(data);
        if (data.wsUser!=0) {
            socket.nickname = data.wsUser;
            //io.emit()用力广播，socket.emit()只是单机发送；
            io.emit('enter', socket.nickname + " comes in");
        } else {
            clientCount++
            socket.nickname = 'user' + clientCount;
            //io.emit()用力广播，socket.emit()只是单机发送；
            io.emit('enter', socket.nickname + " comes in");
        }
    });

    socket.on('message', function(str) {
        io.emit('message', socket.nickname + " : " + str);
    });
    socket.on('modifyUserName', function(str) {
        io.emit('message', socket.nickname + " 更名为： " + str.wsUser+",更名成功。");
        socket.nickname=str.wsUser;
    });
    socket.on('disconnect', function() {
        io.emit('leave', socket.nickname + " leave ");
    });
});
console.log('server running at PORT ' + PORT)