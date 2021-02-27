const { spawn } = require('child_process');
class GenerateXML {
    constructor(url){
        this.generateXML()
    }
    generateXML(){
      const xmlList = ['database', 'liveFloor'] // 需要生成XML的模块列表
      xmlList.forEach(item => this[item] && this[item](item))
    }
    database(name){
      this.getData({
        url: 'https://gw.qiuhui.com/jmfen-sport-scoreapiv2/v31/league/getLeagueAndCountry?typeId=1'
      },
      (data)=>{
        console.log(JSON.parse(data).data.leagueList)
        console.log(`${name} XML已生成`)
      }
      )
    }
    liveFloor(){
      
    }
    getData(opt = {}, callback){
        const ls = spawn('curl', [opt.url]);
        let str=''
        ls.stdout.on('data', (data) => {
          // console.log(`stdout: ${data}`);
          str += data.toString()
        });
        
        ls.stderr.on('data', (data) => {
          console.error(`stderr: ${data}`);
        });
        
        ls.on('close', (code) => {
          callback && callback(str.toString())
          console.log(`子进程退出，退出码 ${code}`);
        });
    }

}
new GenerateXML()
