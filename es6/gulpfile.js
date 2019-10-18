
//引入gulp，gulp-babel的npm模块；
var gulp = require('gulp');
var babel = require('gulp-babel');

//创建gulp运行代码
gulp.task('default', function() { //‘babel’ gulp的脚本名称，自定义命名
    return gulp.src(['src/*.js', '!gulpfile.js']) //js入口文件，可用绝对路径、相对路径，是文件类型
        .pipe(babel()) //运行gulp-babel进行编译
        .pipe(gulp.dest('js')) //编译后的文件输出地址，是文件夹类型
});

gulp.task('watch', function() {
    console.log('start success')
    var watcher=gulp.watch(['src/*.js', '!gulpfile.js'], ['default']);
    watcher.on('change', function(event) {
        //require('E:/wave/exercise/nodejs/ES6/js/test.js')
        require(event.path);
        Object.keys(require.cache).forEach((key,ind)=>{
            if(ind==Object.keys(require.cache).length-1){
                delete require.cache[key]
            }
        })
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      });
})