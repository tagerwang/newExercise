function dec(id){
	// 此处是按照修饰顺序执行
    console.log('evaluated', id);
    // 返回的函数则是按照反顺序执行。
    return (target, property, descriptor) => console.log('executed', id)
}

class Example{
    @dec(1)
    @dec(2)
   	method(){}
}