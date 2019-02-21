const koa = require('koa')
const app = new koa()
const fs = require('fs')
var path = require("path");
// const main = ctx => {
//   ctx.response.type = 'html';
//   ctx.response.body = fs.createReadStream(path.resolve(__dirname)+'/canvas1.html');
// };
const serve = require('koa-static');

const main = serve(path.join(__dirname));

app.use(main);
app.listen(3000)