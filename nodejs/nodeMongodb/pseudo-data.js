var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
 
var port = process.env.PORT || 3040;
 
var app = express();
 
var dir = path.join(__dirname, './views/pages/');
 
// 使用html模板，需增加  app.engine('html', require('ejs').__express);使用EJS或jade模板，不用配置该项。
 
app.set('views', dir);// 设置模板相对路径(相对当前目录)
app.set('view engine', 'jade');// 设置模板引擎

//旧版用app.use(express.bodyParser())替代下面两行；否则要安装bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use(express.bodyParser());
 
 
/*通过 Express 内置的 express.static 可以方便地托管静态文件，例如图片、CSS、JavaScript 文件等。
将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问了。
注意：express 4.x版本之后值保留了express.static这个方法，其他方法都分为中间件另外安装引入
*/
app.use(express.static(path.join(__dirname, 'bower_components')));
 
// 首页 分割线
app.get('/', (req, res)=>{
  res.render('index', {// 调用当前路径下的 test.jade 模板
    title: '电影网站首页',
    movies: [{
      title: '异形：契约1',
      _id: 1,
      poster: 'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2167448161.webp'
    },
    {
      title: '异形：契约2',
      _id: 2,
      poster: 'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2167448161.webp'
    },
    {
      title: '异形：契约3',
      _id: 3,
      poster: 'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2167448161.webp'
    },
    {
      title: '异形：契约4',
      _id: 4,
      poster: 'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2167448161.webp'
    },
    {
      title: '异形：契约5',
      _id: 5,
      poster: 'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2167448161.webp'
    }],
  });
});
 
// 详情页
app.get('/movie/:id', (req, res)=>{
  res.render('detail', {
    title: '电影详情',
    movie: {
      director: '雷德利·斯科特',
      country: '美国',
      title: '异形：契约1',
      year: 2017,
      poster: 'https://img3.doubanio.com/img/celebrity/small/32214.jpg',
      language: '英语',
      flash: 'http://119.188.38.131/youku/65743530DBB4C838FBA166544F/0300080100585FB87B799839BBD120136343F3-AD4F-8451-FC2A-A9554D727689.mp4?sid=049846040186412f9e92c&ctype=12&ccode=0401&duration=133&expire=18000&psid=599c21659cf2ed62339a7ba955d34987&ups_client_netip=114.240.103.157&ups_ts=1498460401&ups_userid=&utid=LT%2FBEcSPnjsCAXt3LLqrfLyH&vid=XMTg4NTUxNjQ5Ng%3D%3D&vkey=A57113a190f13ec64fa327c44ec8d116e&nk=411351972806_24974340174&ns=0_22165960&special=true',
      summary:'“科幻之父”雷德利-斯科特将为他所开创的《异形》系列带来新篇章。《异形：契约》的故事发生在《普罗米修斯》10年后，一群新的宇航员乘坐着“契约号”飞船前往遥远的星系寻找殖民地，他们来到一处看似天堂般的星球，实则是黑暗、危险的地狱，在那里他们见到了“普罗米修斯”号唯一的幸存者——由迈克尔·法斯宾德饰演的生化人大卫，一场毁灭性的巨大灾难即将到来。'
    }
  });
});
 
// 后台录入页
app.get('/admin/movie', (req, res)=>{
  res.render('admin', {
    title: '电影录入',
    movie: {
      title: '',
      director: '',
      country: '',
      year: '',
      poster: '',
      flash: '',
      summary: '',
      language: ''
    }
  });
});
 
// 列表页
app.get('/admin/list', (req, res)=>{
  res.render('list', {
    title: '电影列表',
    movies: [{
      title: '异形：契约',
      _id: 1,
      director: '雷德利·斯科特',
      country: '美国',
      year: 2017,
      poster: 'https://img3.doubanio.com/img/celebrity/small/32214.jpg',
      language: '英语',
      flash: 'http://119.188.38.131/youku/65743530DBB4C838FBA166544F/0300080100585FB87B799839BBD120136343F3-AD4F-8451-FC2A-A9554D727689.mp4?sid=049846040186412f9e92c&ctype=12&ccode=0401&duration=133&expire=18000&psid=599c21659cf2ed62339a7ba955d34987&ups_client_netip=114.240.103.157&ups_ts=1498460401&ups_userid=&utid=LT%2FBEcSPnjsCAXt3LLqrfLyH&vid=XMTg4NTUxNjQ5Ng%3D%3D&vkey=A57113a190f13ec64fa327c44ec8d116e&nk=411351972806_24974340174&ns=0_22165960&special=true',
      summary:'“科幻之父”雷德利-斯科特将为他所开创的《异形》系列带来新篇章。《异形：契约》的故事发生在《普罗米修斯》10年后，一群新的宇航员乘坐着“契约号”飞船前往遥远的星系寻找殖民地，他们来到一处看似天堂般的星球，实则是黑暗、危险的地狱，在那里他们见到了“普罗米修斯”号唯一的幸存者——由迈克尔·法斯宾德饰演的生化人大卫，一场毁灭性的巨大灾难即将到来。'
    }]
  });
});
 
app.listen(port)
console.log('Servet started on port ' + port)