#01-helloJS
这一章，我们需要对js有一个基本的了解。
##javascript概要
是一种直译式语言。

一般（注意，一般）由浏览器解释和执行，浏览器均内嵌一个js引擎（解释和执行javascript）。现在也用于服务端技术，如node.js。

日常用途

- 嵌入动态文本于HTML页面。
- 对浏览器事件做出响应。
- 读写HTML元素。
- 在数据被提交到服务器之前验证数据。
- 检测访客的浏览器信息。
- 控制cookies，包括创建和修改等。
- 基于Node.js技术进行服务器端编程。

发展初期，JavaScript的标准并未确定，同期有Netscape的JavaScript，微软的JScript和CEnvi的ScriptEase三足鼎立。1997年，在ECMA（欧洲计算机制造商协会）的协调下，由Netscape、Sun、微软、Borland组成的工作组确定统一标准：ECMA-262。

完整的JavaScript实现包含三个部分：ECMAScript，文档对象模型，浏览器对象模型。

- ECMAScript，描述了该语言的语法和基本对象。
- 文档对象模型（DOM），描述处理网页内容的方法和接口。
- 浏览器对象模型（BOM），描述与浏览器进行交互的方法和接口。

**我们首先就要学习js的语法和基本对象。**

##语法概述
任何语言都包含以下基本内容

- 变量
- 运算
- 基本语句
- 流程控制语句
- 数组
- 字符串
- 其他对象
- 函数
- 面向对象
	- 类、对象
	- 属性、方法
- 面向对象特性
	- 继承
	- 封装
	- 多态
- 异常处理机制

差不多就这些，有的语言还有io，多线程等。所以学习一门新的语言，如果之前没有编程经验，就要从头学习，如果已经掌握一门语言，那么就会轻松些。

###嵌入网页中的js
```html
<html>
	<head>
		<meta charset="utf-8">
		<script type="text/javascript">
			var name = "lanqiao";//定义一个变量
			alert(name);//弹出变量的值
		</script>
	</head>
	<body>

	</body>
</html> 
```
js可以写在网页的任何地方，但是js代码需要被包含在script标签之内，以便告知浏览器这中间的代码是js，而不是html的元素。type="text/javascript"是向浏览器说明，如果浏览器不支持javascript，那么这中间的内容就是文本（text）。

一个网页中可以多次出现script标签，浏览器按顺序解释。

上例中，打开网页会弹出提示，确认后，网页上没有任何内容，大家知道网页上可以直接用文本或者标签来展示内容，js也具备向网页写内容的功能：

	<html>
	<head>
		<meta charset="utf-8">
		<script type="text/javascript">
			var name = "lanqiao";//定义一个变量
			alert(name);//弹出变量
		</script>
	</head>
	<body>
		<script type="text/javascript">
			document.write("<p>这是js向网页输出的内容</p>");
		</script>	
		<p>这是网页上直接展示的内容</p>
	</body>
	</html>
