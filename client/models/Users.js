var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  // `title` is required and of type String
    firstName: {
    type: String,
    required: true
  },
  // `lastName` is required and of type String
  lastName: {
    type: String,
    required: true
  },

email:{
    type:String,
    require:true
},
  userCreated: {
    type: Date,
    default: Date.now
  },
  mentoredUsers:{
    type:Schema.Types.ObjectId,
    ref:"Users"
  },
  menteeUsers:{
    type:  Schema.Types.ObjectId,
    ref:"Users"
  },
    
  // `resources` is an object that stores a Resources id
  // The ref property links the ObjectId to the Resources model
  // This allows us to populate the Developer with an associated Resources
  resources: {
    type: Schema.Types.ObjectId,
    ref: "Resources"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Developer = mongoose.model("Developer", DeveloperSchema);

// Export the Article model
module.exports = Developer;
