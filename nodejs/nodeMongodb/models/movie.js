var mongoose=require('mongoose');
var MovieSchema=require('../schemas/movie');
var Movie=mongoose.model('Movie',MovieSchema);//生成模型，传名字/模式；

module.exports=Movie;