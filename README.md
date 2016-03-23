# iNode
node及相关技术学习记录

##获取资料
安装git

熟悉各种命令


克隆本项目：git clone  <https://github.com/zhengwei223/iNode.git>

修改后可提交
## 配置
mac的vi在编辑js文件时报错：

	Error detected while processing function 87_JSLint:
	Line 33:
	could not invoke JSLint!

解决办法：

编辑~/.vimrc，在最前面加入如下内容：

	" Use Node.js for JavaScript interpretation"
	let $JS_CMD='node'

