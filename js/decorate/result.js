var _class;

function decoratorA(target) {
  //Person
  //修改target,添加各种方法或者属性等
  console.warn(target);
}
//如果有一个叫,修饰Class

//修饰类
let Person = decoratorA(_class = class Person {
  say(message) {}
}) || _class;
