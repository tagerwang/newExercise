
function Chat(){
    this.setForce=false;
}
var webChat=new Chat();
Chat.prototype.setUseName=function(setForce){// 设置用户名
    var _this=this;
    if(setForce){
        this.setForce=true;
    }else{
        this.setForce=false;
    }
    if (localStorage.wsUser && !setForce) {
        _this.startInfo()
    } else {
        weui.dialog({
            title: '用户名设置',
            content: '<input class="weui-input promptUser" type="text" placeholder="请输入用户名"/>',
            className: 'custom-classname',
            buttons: [{
                label: '取消',
                type: 'default',
                onClick: function() {
                    if (!setForce) {
                        localStorage.wsUser = 0;
                        _this.startInfo()
                    } else {

                    }
                }
            }, {
                label: '确定',
                type: 'primary',
                onClick: function() {
                    var wsUser = $(".promptUser").val();
                    localStorage.wsUser = wsUser;
                    if (!setForce) {
                        _this.startInfo();
                    } else {
                        websocket.emit('modifyUserName', { wsUser: localStorage.wsUser })
                    }
                }
            }]
        });
    }
}

Chat.prototype.addInfo=function(txt, type){
    var div = document.createElement('div')
    div.innerHTML = txt;
    div.className = "addInfo"
    if (type == "enter") {
        div.style.color = "blue";
    } else if (type == "leave") {
        div.style.color = "red";
    }else if(this.setForce){
        div.style.color = "#1aad19";
    }
    $(".content").append(div).scrollTop($(".content")[0].scrollHeight - $(".content").height());
}
Chat.prototype.startInfo=function (setForce) {
    var _this=this;
    window.websocket = io("ws://" + position.ip + ":" + position.port)//连接websocket;
    websocket.emit('userName', { wsUser: localStorage.wsUser })
    websocket.on('enter', function(data) {
        if (!localStorage.wsMessageInfo) {
            localStorage.wsMessageInfo = ''
        } else {
            $.each(localStorage.wsMessageInfo.split("&*&"), function(i, v) {
                _this.addInfo(v, 'message')
            })
        }
        _this.addInfo(data, 'enter')
    })
    websocket.on('message', function(data) {
        if (setForce) {
            _this.addInfo(data, 'modifyUserName')
        } else {
            _this.addInfo(data, 'message')
        }

        var newInfo = data.split(":");
        var infoPart = newInfo.shift();
        localStorage.wsMessageInfo = localStorage.wsMessageInfo + "&*&" + data;
    })
    websocket.on('leave', function(data) {
        _this.addInfo(data, 'leave')
    })
    document.getElementById('sendBtn').onclick = function() { //client发送信息到后台
        var txt = document.getElementById('sendTxt').value;
        websocket.emit('message', txt)
        $("#sendTxt").val("")
    }
}
webChat.setUseName();
$(".icon-shezhi").click(function() {
    weui.actionSheet([{
        label: '设置用户名',
        onClick: function() {
            webChat.setUseName(true);
            console.log('设置用户名');
        }
    }, {
        label: '清空历史记录',
        onClick: function() {
            localStorage.wsMessageInfo = ''
            console.log('清空历史记录');
        }
    },{
        label: '重置所有并刷新',
        onClick: function() {
            localStorage.wsMessageInfo = ''
            location.reload();
            console.log('重置');
        }
    }], [{
        label: '取消',
        onClick: function() {
            console.log('取消');
        }
    }], {
        className: 'custom-classname',
        onClose: function() {
            console.log('关闭');
        }
    });
})


