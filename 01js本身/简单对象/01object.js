var dog = { 
	name: 'Benji', //键值对
	talk: 
		function(){ 
			console.log('Woof, woof!'); 
		}
};
console.log(typeof(dog));
console.log(dog.name);//访问对象的属性
dog.talk();//访问对象的方法

console.log(dog.constructor);
