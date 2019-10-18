var wsconfig = {
    local: {
        ip: "10.9.2.64",
        port: "10088"
    },
    dev: {
        ip: "www.wtaog.com",
        port: "10088"
    }
}
switch (location.hostname) {
    case "localhost":
        var position = wsconfig['local']; //var vConsole = new VConsole();
        break;
    case "10.9.2.64":
        var position = wsconfig['local']; //var vConsole = new VConsole();
        break;
    case "47.91.249.35":
        var position = wsconfig['dev']; //var vConsole = new VConsole();
        break;
    case "www.wtaog.com":
        var position = wsconfig['dev']; //var vConsole = new VConsole();
        break;
}
console.log(position.ip + ":" + position.port)
    // Rem配置
function Rem() {
    var docEl = document.documentElement,
        oSize = docEl.clientWidth / 7.5;
    if (oSize > 100) {
        oSize = 100;
    }
    docEl.style.fontSize = oSize + 'px';
}
window.addEventListener('resize', Rem, false);
Rem();
if (typeof devStorage === 'object') {
    try {
        localStorage.setItem('localStorage', 1);
        localStorage.removeItem('localStorage');
    } catch (e) {
        Storage.prototype._setItem = Storage.prototype.setItem;
        Storage.prototype.setItem = function() {};
        alert('请关闭浏览器无痕浏览模式');
    }
}