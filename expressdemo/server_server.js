var http= require('http');
var fs = require('fs');
var url = require('url');
 
 http.createServer((req,res)=>{
 	var pathname = url.parse(req.url).pathname;
 	console.log('request for'+ pathname+ 'received');
 	fs.readFile(pathname.substr(1),(err,data)=>{
 		if(err){
 			console.log(err);
 			res.writeHead(404,{'Content-Type':'text/html'});
 		}else{
 			res.writeHead(200,{'Content-Type':'text/html'});
 			res.write(data.toString());
 			console.log(pathname);
 		}
 		res.end();
 	});
 }).listen(8081);
 console.log('server runnuing at http://127.0.0.1:8081/');