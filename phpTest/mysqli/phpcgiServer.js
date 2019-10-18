var http = require('http')
var libUrl = require('url'); //URL解析模块 
var libPath = require("path"); //路径解析模块
var express = require('express');
var router = express.Router();
var app = express();
var debug = require('debug')('myapp:server');
var fs1 = require('fs');

var middleware = require('node-phpcgi')({
    documentRoot: __dirname,
    // change it to your own handler path
    handler: 'E:/wave/softpack/php7.1.9/php-cgi'
});
app.all('*', function(req, res, next) {
    stats = fs1.lstatSync(__dirname+req.originalUrl); //查看文件属性
    if (stats.isDirectory()) {
        var dir=[];
        fs1.readdir(__dirname+req.originalUrl, function(err,files) { //罗列文件夹下面文件;
            if (err) {
                console.log(err);
            } else {
                console.log(files);
                var root=/\/$/.test(req.originalUrl)?"":"/"
                for(var i=0;i<files.length;i++){
                    files[i]="<a href="+req.originalUrl+root+files[i]+">"+files[i]+"</a><br>"
                }
                res.send(files.join(''));
            }
        });
    } else {
        middleware(req, res, function(err) {
            // console.log("php页面访问成功")
            // res.writeHead(200, { "Content-Type":"image/ico"});//要有结束语句，test;
            next();
        });
    }

});
app.get('/', function(req, res) {
    res.send('Hello World根!');
});
// var app = http.createServer(function (req, res) {
//     middleware(req, res, function (err) {
//         // console.log("php页面访问成功")
//         // res.writeHead(200, { "Content-Type":"image/ico"});//要有结束语句，test;
//     });
// });
// app.listen(3033)


// 该路由使用的中间件
// router.use(function timeLog(req, res, next) {
//     console.log('Time: ', Date.now());
//     next();
// });
// router.use(express.static('./'));
// app.get('*', function (req, res) {
//     res.writeHead(200, { "Content-Type":"image/ico"});//要有结束语句，test;
//     res.end('Hello World!');
// });

// var server = app.listen(3033, function () {
//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('Example app listening at http://%s:%s', host, port);
// });

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3033');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        console.log({ 'err': error });
        throw error;
    }

    var bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.log({ 'err': bind + ' requires elevated privileges' });
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.log({ 'err': bind + ' is already in use' });
            process.exit(1);
            break;
        default:
            console.log({ 'err': error });
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    debug('Listening on ' + bind);
}