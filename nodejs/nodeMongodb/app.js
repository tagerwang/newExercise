var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3040;

var app = express();
var _ = require('underscore')
var dir = path.join(__dirname, './views/pages/');

// 使用html模板，需增加  app.engine('html', require('ejs').__express);使用EJS或jade模板，不用配置该项。

var mongoose = require('mongoose') //建模工具模块；
var Movie = require('./models/movie') //获取数据模型；
mongoose.connect('mongodb://localhost:27017/MongoDBTager')

app.set('views', dir); // 设置模板相对路径(相对当前目录)
app.set('view engine', 'jade'); // 设置模板引擎

//旧版用app.use(express.bodyParser())替代下面两行；否则要安装bodyParser
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

app.use(express.bodyParser());


/*通过 Express 内置的 express.static 可以方便地托管静态文件，例如图片、CSS、JavaScript 文件等。
将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问了。
注意：express 4.x版本之后值保留了express.static这个方法，其他方法都分为中间件另外安装引入
*/
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'public')));

//admin拿到从表单提交过来的数据；
app.post('/ps/agent/add_eseal_order', function(req, res) {
    //var id = req.body.movie._id;
    // var reqData = [];
    // var size = '';
    // req.on('data', function(data) {
    //     console.log('>>>req on');
    //     reqData.push(data);
    //     size += data.length;
    // });
    // req.on('end', function() {
    //     req.reqData = Buffer.concat(reqData, size);
    // });
    let body = '';
    // 接收数据为 utf8 字符串，
    // 如果没有设置字符编码，将接收到 Buffer 对象。
    req.setEncoding('utf8');

    // 如果监听了 'data' 事件，Readable streams 触发 'data' 事件 
    req.on('data', (chunk) => {
        body += chunk;
    });

    // end 事件表明整个 body 都接收完毕了 
    req.on('end', () => {
        try {
            const data = JSON.parse(body);
            // 发送一些信息给用户
            res.write(typeof data);
            res.end();
        } catch (er) {
            // json 数据解析失败 
            res.statusCode = 400;
            return res.end(`error: ${er.message}`);
        }
    });

})

// 首页 分割线
app.get('/', (req, res) => {
    Movie.fetch(function(err, movies) {
        if (err) {
            console.log(err + ",from fetch Fun")
        }
        res.render('index', { // 调用当前路径下的 test.jade 模板
            title: '电影网站首页',
            movies: movies,
        });
    })

});

// 详情页
app.get('/movie/:id', (req, res) => {
    var id = req.params.id;
    Movie.findById(id, function(err, movie) {
        if (err) {
            console.log(err + ",from fetch findById /movie/:id")
        }
        res.render('detail', {
            title: '电影详情', // + movie.title,
            movie: movie
        });
    })
});

// 后台录入页
app.get('/admin/movie', (req, res) => {
    res.render('admin', {
        title: '电影录入',
        movie: {
            title: '',
            doctor: '',
            country: '',
            year: '',
            poster: '',
            flash: '',
            summary: '',
            language: ''
        }
    });
});
//admin updata movie

app.get('/admin/update/:id', function(req, res) {
    var id = req.params.id; //req.body.movie._id
    if (id) { //修改数据；
        Movie.findById(id, function(err, movie) {
            if (err) {
                console.log(err + ",from fetch findById")
            } else {
                res.render('admin', {
                    title: '电影详情更新',
                    movie: movie
                });
            }
        })
    }

})

//admin拿到从表单提交过来的数据；
app.post('/admin/movie/new', function(req, res) {
    var id = req.body.movie._id;
    var movieObj = req.body.movie;
    var _movie;
    if (id !== 'undefined') { //修改数据；
        Movie.findById(id, function(err, movie) {
            if (err) {
                console.log(err + ",from fetch findById")
            }
            _movie = _.extend(movie, movieObj)
            _movie.save(function(err, movie) {
                if (err) {
                    console.log(err + ",from save")
                }
            })
            res.redirect('/movie/' + _movie._id)
        })
    } else { //新增；
        _movie = new Movie({
            title: movieObj.title,
            doctor: movieObj.doctor,
            country: movieObj.country,
            year: movieObj.year,
            poster: movieObj.poster,
            flash: movieObj.flash,
            summary: movieObj.summary,
            language: movieObj.language
        })
        _movie.save(function(err, movie) {
            if (err) {
                console.log(err + ",from save")
            }
        })
        res.redirect('/movie/' + _movie._id)
    }

})

// 列表页
app.get('/admin/list', (req, res) => {
    Movie.fetch(function(err, movies) {
        if (err) {
            console.log(err + ",from fetch Fun")
        }
        res.render('list', {
            title: '电影列表',
            movies: movies
        });
    })
});

//list delete movie
app.delete('/admin/list', function(req, res) {
    var id = req.query.id;
    if (id) {
        Movie.remove({ _id: id }, function(err, movie) {
            if (err) {
                console.log(err)
            } else {
                res.json({ success: 1 })
            }
        })
    }
})

app.listen(port)
console.log('Servet started on port ' + port)