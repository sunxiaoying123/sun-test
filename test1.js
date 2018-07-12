//阻塞代码
/*var fs = require("fs");
var data = fs.readFileSync('test.txt');
console.log(data.toString());
console.log("Program Ended");*/

//非阻塞代码
var fs = require('fs');
fs.readFile('test.txt',(err,data)=>{
	if(err) return console.log(err);
	console.log(data.toString());
})
console.log('param Ended');