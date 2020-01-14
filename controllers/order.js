var express =require("express");
var mongoose=require("mongoose");
var bodyParser=require("body-parser")
var route=express.Router()
var http = require('http');
var app = express();   
var server = http.createServer(app);
var parseUrlencoded= bodyParser.urlencoded({extended: true})

route.get("/orders",function(request,response){
  console.log("this is add")
  response.render('./order/List-Order.ejs')
})
    route.post('/orderlist',function(req,resp){
    mongoose.model("order").findById(req.body.name,
      (function(err,data){
  
        resp.render("./order/List-Order",{order_data:data})
       
     })
  )})
    


module.exports=route;
