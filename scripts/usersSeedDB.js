
const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mentor-match",
  {
    useMongoClient: true
  }
);

const usersSeed = [
    {
      name: "John Doe",
      email: "john.doe@gmail.com",
      password:"12345",
      github: "https://github.com/johndoe",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/MarioSMBW.png/220px-MarioSMBW.png",
      desc: "I am a front-end web developer who loves to code.",
      skill: "HTML, CSS, JavaScript"
    },
  
    {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
      github: "https://github.com/janedoe",
      image: "https://upload.wikimedia.org/wikipedia/en/f/f1/LuigiNSMBW.png",
      desc: "I am a back-end web developer.",
      skill: "Node.js, Express, MongoDB"
    },
    {
      name: "Jane Haux",
      email: "Jane.H@gmail.com",
      github: "https://github.com/janehaux",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/MarioSMBW.png/220px-MarioSMBW.png",
      desc: "Fullstack here and ready to rumble",
      skill: "HTML, CSS, node_js,express_js"
    },
];
  
db.Users
.remove({})
.then(() => db.Users.collection.insertMany(usersSeed))
.then(data => {
  console.log(data.insertedIds.length + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});