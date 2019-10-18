
//DEMO4问题：JSON格式化问题和
var ws = require("nodejs-websocket")
var PORT = 8001;
var clientCount=0;
// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
    console.log("New connection")
    clientCount++;
    conn.nickname='user'+clientCount;
    var mes={};
    mes.type="enter";
    mes.data=conn.nickname+' comes in'
    broadcast(JSON.stringify(mes));
    conn.on("text", function (str) {//接收client websocket.send(txt)发送的信息；
        console.log("Received " + str)
        //conn.sendText(str)
        var mes={};
        mes.type="message";
        mes.data=conn.nickname+" say: "+str
        broadcast(JSON.stringify(mes));//广播到每个client;
        //conn.sendText(str.toUpperCase()+"!!!")
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
        var mes={};
        mes.type="leave";
        mes.data=conn.nickname+' leave'
        broadcast(JSON.stringify(mes))
    })
    conn.on("error", function (err) {
        console.log("handle err", err)
    })
}).listen(PORT)
function broadcast(str){
    server.connections.forEach(function(connection){
        connection.sendText(str)//触发每个client的onmessage;
    })
}
console.log('server running at PORT ' + PORT)