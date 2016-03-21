# iNode
node及相关技术学习记录<br/>
##获取资料
安装git<br/>
熟悉各种命令<br/>
克隆本项目：git clone https://github.com/zhengwei223/iNode.git<br/>
修改后可提交<br/>
## 配置
mac的vi在编辑js文件时报错：<br/>
Error detected while processing function 87_JSLint:<br/>
Line 33:<br/>
could not invoke JSLint!<br/>
解决办法：<br/>
编辑~/.vimrc，在最前面加入如下内容：<br/>
" Use Node.js for JavaScript interpretation"<br/>
let $JS_CMD='node'<br/>
