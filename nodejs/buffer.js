var fs = require('fs')

fs.readFile('./img.jpg', function(err, buf) {
    // <Buffer 2f 2a 2a 0a 20 2a 20 53 75 ... >
    console.log(buf);
});


// var bufs = [];
// conn.on('data', function(buf) {
//     bufs.push(buf);
// });
// conn.on('end', function() {
//     // 接收数据结束后，拼接所有收到的Buffer对象
//     var buf = Buffer.concat(bufs);
// });


var buffer1 = new Buffer("hello", "utf-8");
var buffer2 = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
var buffer3 = new Buffer([104, 101, 108, 108, 111]);
var buffer4 = new Buffer(26);
console.log(buffer1.toString(), buffer2.toJSON(), buffer3 + '', buffer4.toString(), 'buffer')
var buf = new Buffer(26);
for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}
console.log(buf.toString(), buf.toJSON())