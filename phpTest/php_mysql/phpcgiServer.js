var http = require('http')
var libUrl = require('url'); //URL解析模块 
var libPath = require("path"); //路径解析模块
var fs1 = require('fs');
stats = fs1.lstatSync("./php_mysql/article"); //查看文件属性
fs1.readdir("./php_mysql/article", function(err,files) { //罗列文件夹下面文件;
    if (err) {
        console.log(err);
    } else {
        console.log(files);
    }
});
var middleware = require('node-phpcgi')({
    documentRoot: __dirname,
    // change it to your own handler path
    handler: 'D:/software/php-7.1.14-Win32-VC14-x64thread/php-cgi'
});
var app = http.createServer(function(req, res) {
    middleware(req, res, function(err) {
        console.log("php页面访问成功")
        res.writeHead(200, { "Content-Type": "image/ico" }); //要有结束语句，test;
    });
});
app.listen(3033)