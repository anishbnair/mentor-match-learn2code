const db = require("../models");

// Defining methods for the UserssController
module.exports = {

    findAll: function(req, res) {
        console.log("******************findAll method****************");
        db.Users
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }, //findOne method is for signin only
    
    findOne: function(req, res) {
        console.log("findone console:" + JSON.stringify(req.body.email))
        db.Users
            .findOne({ "email": req.body.email })
            .sort({ date: -1 })
            .then(dbModel => {
                //testing: 
                console.log("controller data:" + dbModel)
                //testing ended:
                if (dbModel === null) {
                    console.log("creating user...." + dbModel)
                    db.Users
                        .create(req.body)
                        .then(dbModel => res.json(dbModel))
                        .catch(err => res.status(422).json(err));
                    res.json("controller side" + dbModel)

                }
            })
            .catch(err => res.status(422).json(err));


    },
    //user to return user's preferences on the dasboardpages.js
    findByEmail: function(req, res) {
        res.send("users preferences has been sent to the back! Next step database...")
        // db.Users
        //   .findById(req.body.id)
        //   // .findById(req.id)
        // .then(dbModel => res.json(dbModel))
        // .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Users
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        console.log("testing from update in userscontroller.js")
        console.log(req.body)
        db.Users
            .findOneAndUpdate({ "email": req.body.email }, { html: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Users
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    addConnection: function(req, res) {
        console.log("running addConnection");
        console.log("req.body from inside addConnection");
        console.log(req.body);        
        db.Users.findOneAndUpdate({
            _id: req.body.userIndex
        }, {
            $push: {
                //mentors: req.body.mentorIndex
                mentoredUsers: req.body.mentorIndex
            }
        });
    }
};

