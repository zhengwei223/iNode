var conn = require('./conn.js');

var sql_listAllUser = 'select * from tb_upc_user limit 0,10';
//发起查询
conn.query(sql_listAllUser,function (err,result,fields) {
	
	if (err) {
		throw err;
	}

	if (result) {
	  for(var i = 0; i < result.length; i++){
          console.log("%s\t%s\t%s", result[i].id, result[i].user_account, result[i].user_pwd);
      }

	}

});
conn.end();//关闭连接