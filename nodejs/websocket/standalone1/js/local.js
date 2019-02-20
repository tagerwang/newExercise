var Local = function() {
    var doms;
    //游戏对象；
    var game;
    // 时间间隔
    var INTERVAL = 300;
    // 定时器
    var timer = null;
    // 时间计数器
    var time = 0;
    var timeCount = 0;
    //暂停游戏；
    var excutePause, excuteUp, excuteDown, excuteLeft, excuteRight,excuteFall;
    //绑定键盘事件；
    var bindKeyEvent = function() {
            document.onkeydown = function(e) {
                if (e.keyCode == 38) { //up
                    game.rotate();
                } else if (e.keyCode == 39) { //right
                    game.right();
                } else if (e.keyCode == 40) { //down 1
                    if (!game.down()) {
                        game.fixed();
                    }
                } else if (e.keyCode == 37) { //left
                    game.left();
                } else if (e.keyCode == 32) { //space
                    game.fall();
                } else if (e.keyCode == 13) { //space
                    excutePause();
                    document.onkeydown = function(e) {
                        if (e.keyCode == 13) {
                            excutePause();
                        }
                    }
                }
            }
        }
        //移动
    var move = function() { //下落时间控制、加分、计时；
            timeFunc();
            if (!game.down()) {
                game.fixed();
                var result = game.checkClear();
                var score;
                var viewEle = document.getElementById("score");
                if (result) {
                    switch (parseInt(result)) {
                        case 0:
                            score = 0;
                            break;
                        case 1:
                            score = 10;
                            break;
                        case 2:
                            score = 30;
                            break;
                        case 3:
                            score = 60;
                            break;
                        case 4:
                            score = 100;
                            break;
                        case 5:
                            score = 120;
                            break;
                        case 6:
                            score = 150;
                            break;
                    }
                    document.getElementById("score").innerHTML = parseInt(viewEle.innerHTML) + score;
                }
                var gameOver = game.checkGameOver();
                if (gameOver) {
                    game.onGameOver(false);
                    stop();
                } else {
                    game.performNext(generateType(), generateDir());
                }
            }
        }
        // 随机生成一个方块种类
    var generateType = function() {
            return Math.ceil(Math.random() * 7) - 1;
        }
        // 随机生成一个旋转次数
    var generateDir = function() {
        return Math.ceil(Math.random() * 4) - 1;
    }

    // 计时函数
    var timeFunc = function() {
            timeCount += 1;
            if (timeCount == 5) {
                timeCount = 0;
                time += 1;
                game.setTime(time);
                // if (time % 60 == 0) { // 60秒生成一行
                //     game.addBotLine(generateBotLine(1));
                // }
            }
        }
        // 结束
    var stop = function() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
        document.onkeydown = null;
    }

    //按钮暂停，上、下、左、右,
    var pauseEle = document.getElementById('pause');
    var upEle = document.getElementById('butUp');
    var downEle = document.getElementById('butDown');
    var leftEle = document.getElementById('butLeft');
    var rightEle = document.getElementById('butRight');
    var startEle = document.getElementById('start');
    var fallEle = document.getElementById('butFall');
    excutePause = function() {
        if (pauseEle.innerHTML == "暂停") {
            if (timer) {
                clearInterval(timer);
                timer = null;
            }
            document.onkeydown = null;
            pauseEle.innerHTML = "继续"
        } else {
            bindKeyEvent();
            timer = setInterval(move, INTERVAL);
            pauseEle.innerHTML = "暂停"
        }
    }
    excuteUp = function() {
        game.rotate();
    }
    excuteDown = function() {
        if (!game.down()) {
            game.fixed();
        }
    }
    excuteFall = function() {
        game.fall();
    }
    excuteLeft = function() {
        game.left();
    }
    excuteRight = function() {
        game.right();
    }
    pauseEle.onclick = function() {
        excutePause();
    }
    upEle.onclick = function() {
        excuteUp();
    }
    downEle.onclick = function() {
        excuteDown();
    }
    fallEle.onclick = function() {
        excuteFall();
    }
    leftEle.onclick = function() {
        excuteLeft();
    }
    rightEle.onclick = function() {
        excuteRight();
    }
    startEle.onclick = function() {
            clearInterval(timer)
            start();
        }
        //开始；
    var start = function() {
            doms = {
                gameDiv: document.getElementById('game'),
                nextDiv: document.getElementById('next'),
                timeDiv: document.getElementById('time'),
                scoreDiv: document.getElementById('local_score'),
                resultDiv: document.getElementById('local_gameover'),
                pauseDiv: document.getElementById('pause')
            }
            game = new Game();
            //game.init(doms);
            game.init(doms, generateType(), generateDir()); //开始
            game.performNext(generateType(), generateDir());
            //game.onPause(doms); //暂停
            bindKeyEvent();
            timer = setInterval(move, INTERVAL);
        }
        //导出API；
    this.start = start;
}