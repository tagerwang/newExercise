var app = require('http').createServer(),
    io = require('socket.io')(app),
    clientCount = 0,
    PORT = 3000
app.listen(PORT);
io.on('connection', function (socket) {
    clientCount++
    socket.nickname='user'+clientCount;
    //io.emit()用力广播，socket.emit()只是单机发送；
    io.emit('enter', socket.nickname+" comes in");
    socket.on('message', function (str) {
        io.emit('message', socket.nickname+" say: "+str);
    });
    socket.on('disconnect', function () {
        io.emit('leave', socket.nickname+" leave ");
    });
});
console.log('server running at PORT ' + PORT)