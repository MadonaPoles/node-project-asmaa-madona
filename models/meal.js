var mongoose = require('mongoose');
 
var Schema = mongoose.Schema;

var addmeal = new Schema({
  imge: String,
  name: String,
  discription: String,
  price:Number
 
});

mongoose.model("meal",addmeal);
