var http = require('http');
var url = 'http://www.imooc.com/learn/33';
var cheerio = require('cheerio');
//去左右空格;
function trim(s) {
    return s.replace(/(^\s*)|(\s*$)/g, "");
}

function filterChapters(html) {
    var $ = cheerio.load(html)
    var chapter = $(".chapter ");
    var couseData = [];
    chapter.each(function(ind, val) {
        var chapter = $(this);
        var chapterTitle = chapter.find("strong").find("*").remove().end().text();
        var videos = chapter.find(".video li");

        var chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        }
        videos.each(function(ind, val) {
            var video = $(this).find(".J-media-item");
            var videoTitle = video.find("*").remove().end().text();
            var id = video.attr("href").split("video/")[1];
            chapterData.videos.push({
                title: videoTitle,
                id: id
            })
        })
        couseData.push(chapterData)
    })
    return couseData
}

function consoleCouseData(couseData) {
    couseData.forEach(function(val) {
        console.log(trim(val.chapterTitle))
        val.videos.forEach(function(val) {
            //console.log("["+trim(val.id)+"]"+trim(val.title))
        })

    })

}
http.get(url, function(res) {
    var html = '';
    res.on('data', function(data) {
        html += data
        console.log(html)

    });
    res.on('end', function() {
            var couseData = filterChapters(html);
            consoleCouseData(couseData)
        })
        //res.end('ok')
}).on('error', function() {
    console.log('获取课程数据出错')
});