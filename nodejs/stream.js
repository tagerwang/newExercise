var http=require('http');

var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('input.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
    console.log(chunk)
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data,'data读取完毕');
   output(data)
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("stream读取程序执行完毕");
function output(data){

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data+'\rmy filename is output,I come from test.js','UTF8');
// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log("写入完成。");
});
writerStream.on('error', function(err){
	console.log(err.stack);
 });
// 标记文件末尾
writerStream.end();
console.log("stream写入程序执行完毕");

}


var server= http.createServer(function(req,res){
	console.log(arguments.callee.toString())
	console.log(123)
	res.end('world')
})
server.listen(5002,'127.0.0.1');
