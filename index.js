var express= require('express');
var prizes=require("./routes/prizes");
var bodyParser=require("body-parser");

var app=express();

var  mongoose=require("mongoose");


mongoose.connect('mongodb://localhost/sterling');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("mongo db connection is open");
});
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use(bodyParser.json());

app.use("/prizes",prizes);

app.listen("4344",function(){
    console.log("Server up and running...!!! port number: 4344");
})

