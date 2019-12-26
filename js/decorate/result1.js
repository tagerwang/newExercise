var _class;

function decoratorA(target) {
  //修改target,添加各种方法或者属性等
  console.warn(target); // Class
  target.age = 18; // 给类添加静态方法
}

//修饰类
let Person = decoratorA(_class = class Person {
  say(message) {}
}) || _class;

console.log(Person.age); // 18
