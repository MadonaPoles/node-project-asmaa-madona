var express =require("express");
var mongoose=require("mongoose");
var bodyParser=require("body-parser")
var route=express.Router()
 var app = express();
 var http = require('http');   
 var server = http.createServer(app);
  

 var parseUrlencoded= bodyParser.urlencoded({extended: true})
 
 route.get("",function(request,response){
  console.log("this is add")
  response.render('./Login.ejs')

})
 route.post("/admen",parseUrlencoded,function(req,resp){

    var userModel=mongoose.model("user")
    var new_user=new userModel()
    new_user.email=req.body.admenemail;
    new_user.password=req.body.admenpassword;
     mongoose.model("user").find({
       "email":req.body.admenemail,
       "password":req.body.admenpassword
     },(function(err,data){
       
       if(data.length === 0){
         resp.send("sorrrrrry you are not allowed")
       }else{
         resp.redirect("/meals/list")
        
       }
     }))
          
        
               
})


module.exports=route;