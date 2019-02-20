var http=require('http')
var jade=require('jade')

http.createServer(function(req,res){
    res.writeHead(200,{
        'Content-Type':'text/plain'
    })
    //1.compile
    var fn=jade.compile('div #{course}',{})
    var html=fn({course:'jade'})
    html=jade.render('div #{course}',{course:'jade render'})
    html=jade.renderFile('layout.jade',{course:'jade renderFile',pretty:true})
    res.end(html)
    
}).listen(1337,'127.0.0.1')
console.log(1337)


