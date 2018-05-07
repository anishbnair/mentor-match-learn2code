
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
      skill: "HTML, CSS, JavaScript",
      mentoredUsers:"Empty",
      menteeUsers:"Empty"
    },
  
    {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
      password:"12345",
      github: "https://github.com/janedoe",
      image: "https://upload.wikimedia.org/wikipedia/en/f/f1/LuigiNSMBW.png",
      desc: "I am a back-end web developer.",
      skill: "Node.js, Express, MongoDB",
      mentoredUsers:"Empty",
      menteeUsers:"Empty"
    },
    {
      name: "Jane Haux",
      email: "Jane.H@gmail.com",
      password:"12345",
      github: "https://github.com/janehaux",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/MarioSMBW.png/220px-MarioSMBW.png",
      desc: "Fullstack here and ready to rumble",
      skill: "HTML, CSS, node_js,express_js",
      mentoredUsers:"Empty",
      menteeUsers:"Empty"
    },
];
  console.log("seed testing")
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


// resources seeds:
const resourcesSeed = [
  {
   HTML: {
     type: ["https://www.w3schools.com/html/","http://html5gallery.com/","https://digital.com/tools/html-cheatsheet/"]
     
   },
 
   CSS: {
     type: ["https://www.onblastblog.com/css3-cheat-sheet/", "http://www.sarasoueidan.com/blog/css-shapes/","https://csswizardry.com/"]
     
   },
 
 jQuery:{
     type:["https://www.slideshare.net/simon/learning-jquery-in-30-minutes","http://visualjquery.com/1.1.2.html","https://www.sololearn.com/Course/jQuery/"]
     
 },
 mongo: {
     type:["https://www.eduonix.com/courses/Web-Development/Projects-in-MongoDB-Learn-MongoDB-Building-Ten-Projects","https://docs.mongodb.com/manual/introduction/","https://university.mongodb.com/"]
    
   },
 express:{
     type:["https://expressjs.com/en/resources/middleware.html","https://www.codecademy.com/learn/learn-express","https://www.tutorialspoint.com/expressjs/index.htm "]
     },
 node_js:{
     type:["https://www.w3schools.com/nodejs/default.asp","https://www.youtube.com/watch?v=U8XF6AFGqlc","https://medium.com/quick-code/the-best-tutorials-to-learn-node-js-34818d757013"]
 }
   }
 ];
 console.log("resources seeds checkya")
 db.Resources
   .remove({})
   .then(() => db.Resources.collection.insertMany(resourcesSeed))
   .then(data => {
     console.log(data.insertedIds.length + " records inserted!");
     process.exit(0);
   })
   .catch(err => {
     console.error(err);
     process.exit(1);
   });
 