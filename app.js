var express =require("express");
var mongoose=require("mongoose");
var fs = require('fs');
var bodyParser=require("body-parser")
var loginControllers= require('./controllers/login');
var MealControllers= require('./controllers/Meals');
var orderControllers= require('./controllers/order');
var path=require('path')
var app = express();
app.use(bodyParser.urlencoded({extended: true}))
var parseUrlencoded= bodyParser.urlencoded({extended: true})

app.set('view engine','ejs')
app.set('views','./views')

app.use(express.static(path.join(__dirname, 'public')));

app.use('',loginControllers);
app.use('/meals',MealControllers);
app.use('/order',orderControllers);
app.use(function(req,resp,next){
  resp.setHeader("Access-Control-Allow-Origin","*");
  resp.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
  next()
})

mongoose.connect("mongodb://127.0.0.1:27017/bonappetit",function(err){
  console.log("saved...")
});

var files_arr=fs.readdirSync (__dirname+"/models")
files_arr.forEach(function(file){
  require(__dirname+"/models/"+file);
});

app.listen(5555,function(){
    console.log("hello");
    
  });