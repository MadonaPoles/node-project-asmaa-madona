var mongoose = require('mongoose');
 
var Schema = mongoose.Schema;

var addorder = new Schema({
  
  name: {
    type: Schema.ObjectId,
    ref:"addmeal"
  },

  
});

mongoose.model("order",addorder);
