// 装饰器传值
function decoratorA(value){ 
  return function (target){ //修改target,添加各种方法或者属性等
    target.age = value // 给类添加静态方法
  }
}
@decoratorA(18)  //修饰类
class Person{
  say(message){
  }
} 

console.log(Person.age) // 18
