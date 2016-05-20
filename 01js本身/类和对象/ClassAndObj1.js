"use strict"
//类的声明
class Animal{
	//构造器，用于初始化对象
	constructor(name){
		this.name = name;
	}
	//加get关键字，访问此方法可以用访问属性的形式来访问
	get info(){
		return "my name is "+this.name;
	}
}

var a1 = new Animal("旺仔");//新建Animal类的实例，也就是创建对象
console.log(a1.name);//访问属性
console.log(a1.info);//调用get方法