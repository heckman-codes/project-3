
const db = require("../models");

// Defining methods for the postsController
module.exports = {
    findById: function (req, res) {
        db.User.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findByUsername: function (req, res) {
        console.log(req.params, "request body")
        const user = JSON.parse(req.params.user)
        console.log(user)
        db.User
            .findOne({
                username: user.username
            })

            //password matching
            .then(dbModel => {
                if (dbModel.password === user.password) {
                    console.log("great!")
                    res.json(dbModel)
                    console.log(dbModel)
                } else {
                    res.json({ err: "password did not match" })
                }
            })

            .catch(err => res.status(422).json(err))
    },

    // signup to create new user to database
    create: function (req, res) {
        console.log(req.body)
        db.User.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
};
