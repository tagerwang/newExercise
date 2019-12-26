var _dec, _class;

// 装饰器传值
function decoratorA(value) {
  return function (target) {
    //修改target,添加各种方法或者属性等
    target.age = value; // 给类添加静态方法
  };
}
//修饰类
let Person = (_dec = decoratorA(18), _dec(_class = class Person {
  say(message) {}
}) || _class);


console.log(Person.age); // 18
