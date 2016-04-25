function dinner(fruit){
	this.fruit = fruit;//声明一个属性fruit，在dinner函数被调用时，该属性的值为传入参数的值
	this.foo = function(){  //声明一个属性foo，但foo是一个函数，所以准确地说是为dinner声明一个方法
		console.log(this.fruit);
	}
	this.boo = function(f2){   //声明一个有参的方法
		console.log(this.fruit+" "+f2);
	}
}
//把dinner函数当作一个构造函数，构造函数用于产生新的对象，新对象的属性和方法取决于dinner函数内部的定义
//即dinner函数中用this声明了哪些属性和方法
var din = new dinner("orange");  

din.foo();//调用者即为函数中的this，this是运行时确认的，谁在调用函数，谁就是this

din.boo.apply(new dinner("apple"),["123"]);//apply的作用是替换this（临时改变boo函数中的this），第二个参数是数组
din.boo.call(new dinner("apple"),"123");//call的作用是替换this（临时改变boo函数中的this），不同的是后面的参数是函数本身的参数

/**
this实际上是任何函数的第一个隐藏参数
**/