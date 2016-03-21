const http = require('http');//加载http包

http.createServer((request,response)=>{
	//处理请求的业务逻辑
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end("hello \n");
}).listen(8888);//创建server并监听



