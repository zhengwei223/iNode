#BASIC
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

##变量
变量是应用程序中值的一种符号表示。变量的名字，称为标识符，遵循一定的规范。

变量名必须以应为字母，下划线或者美元符（$）开头，随后可以使用数字。变量名是大小写敏感的。

```_hits, temp99,  _name```这些变量名是合法的。

##声明变量
```var x = 20;```用于声明全局的或者局部变量

```x = 20;```无论这个语句出现在什么地方，都将声明全局变量，**不建议此方式**。

```let x = 20;```声明一个块内变量。

##变量求值
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

##变量作用域（作用范围）