var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ResourcesSchema = new Schema({
  // `title` is required and of type String
    HTML: {
    type: String,
    required: true
  },
  // `lastName` is required and of type String
  CSS: {
    type: String,
    required: true
  },

jQuery:{
    type:Array,
    require:true
},
mongo: {
    type: Array,
    default: Date.now
  },
    

});

// This creates our model from the above schema, using mongoose's model method
var Developer = mongoose.model("Developer", DeveloperSchema);

// Export the Article model
module.exports = Developer;