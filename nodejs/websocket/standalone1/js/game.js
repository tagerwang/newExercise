var Game = function() {
        // dom元素
        var gameDiv;
        var nextDiv;
        var timeDiv;
        var scoreDiv;
        var resultDiv;
        var pauseDiv;
        //游戏矩阵；
        var gameData = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        //cur
        var cur;
        //下一个方块；
        var next;
        //divs
        var nextDivs = [];
        var gameDivs = [];
        // 方块移动到底部 固定;
        var fixed = function() {
                for (var i = 0; i < cur.data.length; i++) {
                    for (var j = 0; j < cur.data[0].length; j++) {
                        if (check(cur.origin, i, j) && cur.data[i][j] == 2) {
                            cur.data[i][j] = 1;
                        }
                    }
                }
                setData();
                refreshDiv(gameData, gameDivs);
            }
            //初始化Div;
        var initDiv = function(container, data, divs) { //区域元素，区域数组，区域元素数组；
                for (var i = 0; i < data.length; i++) {
                    var div = [];
                    for (var j = 0; j < data[0].length; j++) {
                        var newNode = document.createElement('div');
                        newNode.className = 'none';
                        newNode.style.top = (i * 20) + 'px';
                        newNode.style.left = (j * 20) + 'px';
                        container.appendChild(newNode);
                        div.push(newNode);
                    }
                    divs.push(div); //注意数组中的元素和父元素是绑定的；
                }
            }
            //刷新Div;
        var refreshDiv = function(div, divs) { //区域数组，区域元素数组；
                for (var i = 0; i < div.length; i++) {
                    for (var j = 0; j < div[0].length; j++) {
                        if (div[i][j] == 0) {
                            divs[i][j].className = 'none'
                        } else if (div[i][j] == 1) {
                            divs[i][j].className = 'done'
                        } else if (div[i][j] == 2) {
                            divs[i][j].className = 'current'
                        }
                    }
                }
            }
            // 检测点是否合法
        var check = function(pos, x, y) {
                if (pos.x + x < 0) {
                    return false;
                } else if (pos.x + x >= gameData.length) { //向下触底；
                    return false;
                } else if (pos.y + y < 0) {
                    return false;
                } else if (pos.y + y >= gameData[0].length) {
                    return false;
                } else if (gameData[pos.x + x][pos.y + y] === 1) {
                    return false;
                } else {
                    return true;
                }
            }
            //检测数据是否合法
        var isValid = function(pos, data) { //4down
                for (var i = 0; i < data.length; i++) {
                    for (var j = 0; j < data[0].length; j++) {
                        if (data[i][j] != 0) { //small square如果不是0；
                            if (!check(pos, i, j)) {
                                return false;
                            }
                        }
                    }
                }
                return true;
            }
            //清除数据；
        var clearData = function() {
                for (var i = 0; i < cur.data.length; i++) {
                    for (var j = 0; j < cur.data[0].length; j++) {
                        if (check(cur.origin, i, j)) {
                            gameData[i + cur.origin.x][j + cur.origin.y] = 0;
                        }
                    }
                }
            }
            //设置game区域中的cur数据；
        var setData = function() {
            for (var i = 0; i < cur.data.length; i++) {
                for (var j = 0; j < cur.data[0].length; j++) {
                    if (check(cur.origin, i, j)) {
                        gameData[i + cur.origin.x][j + cur.origin.y] = cur.data[i][j];
                    }
                }
            }
        }
        var rotate = function() { // 2
            if (cur.canRotate(isValid)) {
                clearData();
                cur.rotate();
                setData();
                refreshDiv(gameData, gameDivs);
            }
        }
        var down = function() { // 2
            if (cur.canDown(isValid)) {
                clearData();
                cur.down();
                setData();
                refreshDiv(gameData, gameDivs);
                return true;
            } else {
                return false;
            }
        }
        var left = function() { // 2
            if (cur.canLeft(isValid)) {
                clearData();
                cur.left();
                setData();
                refreshDiv(gameData, gameDivs);
            }
        }
        var right = function() { // 2
            if (cur.canRight(isValid)) {
                clearData();
                cur.right();
                setData();
                refreshDiv(gameData, gameDivs);
            }
        }


        // 消行
        var checkClear = function() {
            var line = 0;
            for (var i = gameData.length - 1; i >= 0; i--) { // 反过来遍历
                var clear = true;
                for (var j = 0; j < gameData[0].length; j++) { // 判断一行是否可以清除
                    if (gameData[i][j] != 1) {
                        clear = false;
                        break;
                    }
                }
                if (clear) {
                    line++;
                    for (var m = i; m > 0; m--) {
                        for (var n = 0; n < gameData[0].length; n++) { //使当前行的数据为上一行的数据；
                            gameData[m][n] = gameData[m - 1][n];
                        }
                    }
                    for (var n = 0; n < gameData[0].length; n++) { //??
                        gameData[0][n] = 0;
                    }
                    i++; //为什么消行还要用i++;
                }
            }
            return line;
        }

        // 检查游戏结束
        var checkGameOver = function() {
                var gameOver = false;
                for (var i = 0; i < gameData[0].length; i++) {
                    if (gameData[1][i] == 1) {
                        gameOver = true;
                    }
                }
                return gameOver;
            }
            // 游戏结束
        var onGameOver = function(win) {
                if (win) {
                    resultDiv.innerHTML = '你赢了';
                } else {
                    resultDiv.innerHTML = '游戏结束';
                }
            }
            //暂停游戏
            // var onPause=function(timer,move,INTERVAL,bindKeyEvent){
            //     if (pauseDiv.innerHTML == "暂停") {
            //         if (timer) {
            //             clearInterval(timer);
            //             timer = null;
            //         }
            //         document.onkeydown = null;
            //         pauseDiv.innerHTML = "继续"
            //     } else {
            //         bindKeyEvent();
            //         timer = setInterval(move, INTERVAL);
            //         pauseDiv.innerHTML = "暂停"
            //     }
            // }
            // 设置时间
        var setTime = function(time) {
                timeDiv.innerHTML = time;
            }
            // 使用下一个方块
        var performNext = function(type, dir) {
                cur = next;
                setData();
                next = SquareFactory.prototype.make(type, dir);
                refreshDiv(gameData, gameDivs);
                refreshDiv(next.data, nextDivs);
            }
            //初始化的方法；
        var init = function(doms, type, dir) {
                timeDiv = doms.timeDiv;
                resultDiv = doms.resultDiv;
                gameDiv = doms.gameDiv;
                nextDiv = doms.nextDiv;
                //pauseDiv=doms.pauseDiv;
                cur = new Square();
                //next=new Square;
                next = SquareFactory.prototype.make(type, dir);
                initDiv(nextDiv, next.data, nextDivs);
                initDiv(gameDiv, gameData, gameDivs);

                // cur.origin.x = 10;
                // cur.origin.y = 5;
                setData();
                refreshDiv(gameData, gameDivs);
                refreshDiv(next.data, nextDivs);
            }
            //导出API；
        this.init = init;
        this.down = down;
        this.left = left;
        this.right = right;
        this.rotate = rotate;
        this.fixed = fixed;
        this.checkClear = checkClear;
        this.checkGameOver = checkGameOver;
        this.onGameOver = onGameOver;
        this.performNext = performNext;
        this.setTime = setTime;
        //this.onPause=onPause;
        this.fall = function() {
                while (down()) {
                    console.log("下坠触底")
                }
            }
            //init({gameDiv:document.getElementById('game'),nextDiv:document.getElementById('next')})
    }
    //Game()