#语法和类型
##BASIC
JavaScript是大小写敏感的，使用Unicode字符集。


在JavaScript中，指令被称为语句，语句由分号分隔的（;）。空格，制表符和换行符被称为空白。ECMAScript定义了特定的关键词和字面量，并规定在语句的末尾自动插入分号。然而，建议总是加分号结束你的语句。

##注释
js的注释和其他语言一样。

```
// 单行注释
/* 
多行注释
 */
/* 这样交叉, /* 是不可以的 */ SyntaxError */
```

##声明
三种声明

- var 声明变量，可以选择声明的同时初始化变量
- let 声明块范围的局部变量，可以选择声明的同时初始化变量
- const 声明只读变量

###变量
变量是应用程序中值的一种符号表示。变量的名字，称为标识符，遵循一定的规范。

变量名必须以应为字母，下划线或者美元符（$）开头，随后可以使用数字。变量名是大小写敏感的。

```_hits, temp99,  _name```这些变量名是合法的。

###声明变量
```var x = 20;```用于声明全局的或者局部变量

```x = 20;```无论这个语句出现在什么地方，都将声明全局变量，**不建议此方式**。

```let x = 20;```声明一个块内变量。

###变量求值
用var或者let声明的变量如果没有进行初始化，变量的值为"undefined"。

而访问一个没有声明过的变量会得到一个引用错误（ReferenceError ）

```
var a;
console.log("The value of a is " + a); // logs "The value of a is undefined"
console.log("The value of b is " + b); // throws ReferenceError exception
```

可以将变量和"undefined"对比，以判断该变量是否有值：

```
var input;
if(input === undefined){//计算为真
  doThis();
} else {
  doThat();
}
```
"undefined"值在布尔型上下文中被视为false。下面的代码myFunction将会被调用，因为数组的元素是undefined：

```
var myArray = [];
if (!myArray[0]) {
	myFunction();
}
```
undefined 值在数学运算下，被视为NaN

```
var a;
a + 2;  // Evaluates to NaN
```

一个为null的变量, 在数字上下文中视为0，在布尔上下文中视为false:

```
var n = null;
console.log(n * 32); // 控制台日志输出为0
```

###变量作用域（作用范围）
在一个函数外声明变量，这个变量就是全局变量（global variable），因为它可以在当前文档的其他地方被访问。在一个函数内部声明变量，称之为局部变量，因为只能在函数内部使用。

js在ECMA标准6之前，没有块级变量，即便在块语句中声明变量，它的作用范围也是外围的函数的范围。

```
if (true) {
  var x = 5;
}
console.log(x);  // 5
```
假设我们使用let来声明，那么情况就会发生变化。

```
if (true) {
  let y = 5;
}
console.log(y);  // ReferenceError: y is not defined。y变量是不可见的。
```

###变量提升
在js中有个特殊的事情，你可以引用一个随后声明的变量。这被称为“提升”，js中声明的变量将会被提升直函数或语句的开头。但是，提升的变量的值是"undefined"。

```
/**
 * Example 1
 */
console.log(x === undefined); // logs "true"
var x = 3;

/**
 * Example 2
 */
// will return a value of undefined
var myvar = "my value";
 
(function() {
  console.log(myvar); // undefined
  var myvar = "local value";
})();
```
这段代码的实际效果如下：

```
/**
 * Example 1
 */
var x;
console.log(x === undefined); // logs "true"
x = 3;
 
/**
 * Example 2
 */
var myvar = "my value";
 
(function() {
  var myvar;
  console.log(myvar); // undefined
  myvar = "local value";
})();
```
因为这样的规则，所有在函数中的var语句应该尽量放在函数的顶部，或者越接近越好，这种最佳实践原则，将会提升代码的明确性。

###全局变量（global variables）
全局变量实际上是global对象的属性，在网页中，global对象是```window```,所以你可以用```window.variable```这种语法来设置和访问全局变量。

其次，你可以访问一个声明在别的window或者frame中的全局变量，只需在变量前面加适当的前缀就行了。例如，一个叫```phonenumber```的变量声明在一个文档中，你可以在iframe中用```parent.phonenumber```的形式来进行引用。

###常量（constants）
我们可以用const关键字声明只读的常量，标识符的命名规则和变量是一样的。

```
const prefix = '212';
```
常量不可以被重新赋值，也不可以重复声明。常量声明时必须被初始化。
const的作用范围和let关键字声明的变量的作用范围是一致的。

不可以在同一个范围内声明具有相同名字的常量和函数。

```
// 这是错误的
function f() {};
const f = 5;

// 这也是错误的
function f() {
  const g = 5;
  var g;

  //statements
}
```

