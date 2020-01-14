var mongoose = require('mongoose');
 
var Schema = mongoose.Schema;

var login = new Schema({
  email: String,
  password: String
  
});

mongoose.model("user",login);
