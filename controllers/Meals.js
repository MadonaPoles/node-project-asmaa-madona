var express =require("express");
var mongoose=require("mongoose");
var bodyParser=require("body-parser")
var route=express.Router()
var http = require('http');
var app = express();   
var server = http.createServer(app);
var parseUrlencoded= bodyParser.urlencoded({extended: true})

 route.post('/Add-Meal',parseUrlencoded,function(req,resp){ 

    var userModel=mongoose.model("meal");
    var new_meal=new userModel()
    new_meal.imge=req.body.imge;
    new_meal.name=req.body.name;
    new_meal.discription=req.body.text;
    new_meal.price=req.body.price;
        new_meal.save(function(err){
      console.log("saved...");
    })
    
    resp.redirect("/meals/list")
})

  route.get("/list",function(request,response){
    mongoose.model("meal").find(function(err,data){
      response.render('./meal/List-meal',{meals_data:data})
    })
   console.log("list")

})
  
 route.get("/addmeal",parseUrlencoded,function(request,response){
    console.log("this is add")
    response.render('./meal/Add-meal.ejs')

})
 

 module.exports=route;