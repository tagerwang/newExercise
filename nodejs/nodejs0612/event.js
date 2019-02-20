var EventEmitter=require('events').EventEmitter;
var life=new EventEmitter;
life.setMaxListeners(11)
//addEventListener
life.on('求安慰',function(who){
    console.log('给'+who+'倒水1')
})
life.on('求安慰',function(who){
    console.log('给'+who+'倒水2')
})
life.on('求安慰',function(who){
    console.log('给'+who+'倒水3')
})
life.on('求安慰',function(who){
    console.log('给'+who+'倒水4')
})
life.on('求安慰',function(who){
    console.log('给'+who+'倒水5')
})
life.on('求安慰',function(who){
    console.log('给'+who+'倒水6')
})
life.on('求安慰',function(who){
    console.log('给'+who+'倒水7')
})
life.on('s求安慰s',function(who){
    console.log('给'+who+'倒水8')
})
life.on('s求安慰s',function(who){
    console.log('给'+who+'倒水9')
})
life.on('求安慰',function(who){
    console.log('给'+who+'倒水10')
})
function water(who){
    console.log('给'+who+'倒水11')
}
life.on('求安慰',water)
life.removeListener('求安慰',function(who){
    console.log('给'+who+'倒水9')
})
life.removeAllListeners("求安慰");//全部移除；
life.emit('求安慰','汉子');
console.log(life.listeners('s求安慰s').length)
console.log(EventEmitter.listenerCount(life,'s求安慰s'))

//var isListener=life.emit('求安慰','汉子');//返回Boolean值；
//console.log(isListener)
