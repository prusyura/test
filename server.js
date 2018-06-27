var express = require('express')
var app = express();
app.use(express.static(__dirname));

var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

 
app.get('/', function (req, res) {
  res.sendFile(__dirname+'/index.html')
})
app.get("/send",function(req,res){
	console.log(req.query);
	var value1=req.query.value1;
	var value2=req.query.value2;
	if(!isNaN(value1)&&!isNaN(value2)){
		var sum=+value1 + +value2
		res.send(sum.toString());
	}
	else{
		res.send("невірні дані!")
	}
	res.send("test");
})
app.post("/send1",function(req,res){
	console.log(req.body);
	var value1=req.query.value1;
	var value2=req.query.value2;
	if(!isNaN(value1)&&!isNaN(value2)){
		var sum=+value1 + +value2
		res.send(sum.toString());
	}
	else{
		res.send("невірні дані!")
	}
	res.send("test");
})

app.post("/send1",function(req,res){
	console.log(req.body);
	var value3=req.query.value3;
	var value4=req.query.value4;
	if(!isNaN(value3)&&!isNaN(value4)){
		var sum=+value3 + +value4
		res.send(sum.toString());
	}
	else{
		res.send("невірні дані!")
	}
	res.send("test");
})
app.listen(8080);

console.log("Server run!");
