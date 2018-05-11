var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object

var ResourcesSchema = new Schema({
 
  HTML: {
    type: {
       type: [String],
       required: true
    }
  },
  
CSS: {
  type: {
    type: [String],
    required: true
 }
  },

jQuery:{
  type: {
    type: [String],
    required: true
 }
},
mongo: {
  type: {
    type: [String],
    required: true
 }
  },
express:{
  type: {
    type: [String],
    required: true
 }
  },
node_js:{
  type: {
    type: [String],
    required: true
 }
  }
    
  });

// This creates our model from the above schema, using mongoose's model method
var Resources = mongoose.model("Resources", ResourcesSchema);

// Export the Article model
module.exports = Resources;