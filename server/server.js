/**
 * Created by bhalerao_sa on 5/8/2015.
 */
(function(){
   var express=require('../config/express');
    var app=express();
    app.listen(3000);
    module.exports=app;
    /*app.use('/',function(req,res){
        res.send('Hello Sir...I am your server.What can I do for you?');
    });*/

   /*connect module server code
    var connect=require('connect');
    var app=connect();
    var hello=function(req,res,next){
        res.setHeader('Content-Type','text/plain');
        res.end('Hello Sir...I am your server.What can I do for you?');
    };
    var goodbye=function(req,res,next){
        res.setHeader('Content-Type','text/plain');
        res.end("Bye Sir.I'm going to sleep.");
    };
    var logger=function(req,res,next){
        console.log(req.method,req.url);
      next();
    };
    app.use(logger);
    app.use('/hello',hello);
    app.use('/Bye',goodbye);
    app.listen(3000);*/

   /* Normal node js server
   var http=require('http');
    http.createServer(function(req,res){
        res.writeHead(200,{
            'content-type':'text/plain'
        });
        res.end('Hello Sir...I am your server.What can I do for you?');
    }).listen(3000);*/
    console.log('server running on at: http://localhost:3000');
 //   module.exports=app;

})();