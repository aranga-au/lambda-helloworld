var app = require('aws-lambda-http');

app.get('/greeting',function (req,resp){

   name = req.params.name || 'world';
   resp.send('hello '+name);

});

app.get('/greeting/{id}',function (req,resp){
         
    var id = +req.pathParams.id ;
    resp.send("hello for id:"+id);

});




exports.handler = app.handler;
