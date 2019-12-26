function decoratorA(target){ //修改target,添加各种方法或者属性等
  console.warn(target) // Class
  target.age = 18 // 给类添加静态方法
}
@decoratorA  //修饰类
class Person{
  say(message){
  }
} 

console.log(Person.age) // 18
