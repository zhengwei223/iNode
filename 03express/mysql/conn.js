//http://blog.fens.me/nodejs-mysql-intro/
var mysql = require('mysql');
var fs = require('fs');
//连接数据库的简单封装
var db;
var conn;
//读取配置
var content = fs.readFileSync('./db.json','utf-8');
var jsonObj = JSON.parse(content);
db = jsonObj.db;
// for (var k in db){
// 	console.log(k+":"+db[k]);
// }
conn = mysql.createConnection(db);
conn.connect();

module.exports = conn;