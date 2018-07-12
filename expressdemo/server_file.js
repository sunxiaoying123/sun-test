var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multipart = require('connect-multiparty'); //在处理模块中引入第三方解析模块 
var multipartMiddleware = multipart();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));




//图 
app.post('/file_upload', multipartMiddleware, function(req, res){
    
    console.log(0,req.body,'\n'); 
    console.log(5, req.files,'\n'); 

    console.log(1,req.files.file.name);
   console.log(2,req.files.file.path);
   console.log(3,req.files.file.type);

   var file = __dirname + "/" + req.files.file.name;
   fs.readFile( req.files.file.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully',
                   filename:req.files.file.name
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
      
})


app.get('/file', function (req, res) {
   res.sendFile( __dirname + "/" + "file.html" );
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
