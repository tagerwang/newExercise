var express = require('express');
var port = process.env.PORT || 3000;
var app= express();
app.set('views','./views');//视图根目录；
app.set('view engine','jade');//默认的模块引擎；
app.listen(port);//监听端口；
console.log('cyyz started on port '+port);