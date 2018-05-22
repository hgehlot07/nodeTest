var express=require('express'),
app=express(),
server=require('http').createServer(app),
io=require('socket.io').listen(server);
var request = require('request');// npm install request
var fs =require('fs');
var url = 'https://eu2.chat-api.com/instance2918/messages?token=xbsnhbnnau2jqvve&last=10';

var bodyParser = require('body-parser');
app.use(bodyParser.json());
server.listen(process.env.PORT || 3000);


app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
});

// 
app.get('/getdata',function(req,res){

request(url, function (error, response, body) { // Make a GET request
    if (error) return console.error('HTTP Error', error);
    // Parse a response
     var data = JSON.parse(body);
	res.json(data);
});
	
	
});