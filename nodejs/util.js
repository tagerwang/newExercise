var util = require('util');

function Base() //构造函数模式  
{
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}
//这里是Base原型定义的函数  
Base.prototype.showName = function() { //原型模式  
    console.log(this.name);
};
Base.prototype.age = 22;

function Sub() {
    this.name = 'Sub';
    //this.age=32;  
}
Sub.prototype.age = 100;
util.inherits(Sub, Base); //sub可以继承Base的原型；


var objBase = new Base();
objBase.showName(); //base  
objBase.sayHello(); //Hello base  
console.log(objBase.age, objBase); //{ name: 'base', base: 1991, sayHello: [Function] }  


var objSub = new Sub();
objSub.showName(); //Sub  
//objSub.sayHello();         //没有这个方法  报错  
console.log(objSub); //{ name: 'Sub' }  不会打印出原型中继承过来的属性和方法  
console.log(objSub.name + "---" + objSub.age); //Sub---22  说明可以访问到原型中继承的属性  
console.log(objSub.base); //undefined