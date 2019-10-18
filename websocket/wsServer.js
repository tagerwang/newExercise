//import { connect } from "net";

// var ws = require("nodejs-websocket")
// var PORT=8001
// // Scream server example: "hi" -> "HI!!!"
// var server = ws.createServer(function (conn) {
// 	console.log("New connection")
// 	conn.on("text", function (str) {
//         console.log("Received "+str)
//         conn.sendText(str)
// 		//conn.sendText(str.toUpperCase()+"!!!")
// 	})
// 	conn.on("close", function (code, reason) {
// 		console.log("Connection closed")
//     })
//     conn.on("error", function (err) {
// 		console.log("handle err",err)
// 	})
// }).listen(PORT)

//for websocket2
var ws = require("nodejs-websocket")
var PORT = 8001;
var clientCount=0;
// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
    console.log("New connection")
    clientCount++;
    conn.nickname='user'+clientCount;
    broadcast(conn.nickname+' comes in');
    conn.on("text", function (str) {//接收client websocket.send(txt)发送的信息；
        console.log("Received " + str)
        //conn.sendText(str)
        broadcast(str);//广播到每个client;
        //conn.sendText(str.toUpperCase()+"!!!")
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
        broadcast(conn.nickname+' left')
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