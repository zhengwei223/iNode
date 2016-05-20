//方法定义。
//方法是函数的一种，不过方法是对象的下一级元素，理解为对象的行为

// ecma5的语法
var obj = {
  foo: function() {},
  bar: function() {}
};

// ecma6的语法，更加简洁
var obj2 = {
  foo() {},
  bar() {}
};

// ecma6声明生成器的简洁语法
// var obj3 = {
//   g : function*(){
//
//   }
//
// }
var obj3 = {
  * g(){

  }
}

//-------方法声明的例子--------
var obj = {
  a : "foo",
  b(){ return this.a; }//返回属性a的值
};
console.log(obj.b()); // "foo"


// 属性名可运算
var bar = {
  foo0 : function (){return 0;},
  foo1(){return 1;},
  ["foo" + 2](){return 2;},//注意此处，方括号内的表达式就是函数名
};

console.log(bar.foo0()); // 0
console.log(bar.foo1()); // 1
console.log(bar.foo2()); // 2
