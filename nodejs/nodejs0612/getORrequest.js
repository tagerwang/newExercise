var http=require('http')
var querystring=require('querystring')
var postData=querystring.stringify({
    'content':"一起",
    'mid':348
})
var options={
    hostname:'www.imooc.com',
    port:80,
    methods:'post',
    path:'/course/docomment',
    headers:{
        "Content-Length":postData.Length
    }

}
var req=http.request(options,function(res){
    console.log('status:'+res.statusCode);
    res.on('end',function(e){
    console.log('end:'+"评论完了")
    res.on('error',function(e){
    console.log('error:'+e.message)
})
res.on('data',function(chunk){
    console.log(Buffer.isBuffer(chunk))
})
})
})
req.on('error',function(e){
    console.log('error:'+e.message)
})
req.write(postData)
req.end();