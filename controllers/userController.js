
const db = require("../models");

// Defining methods for the postsController
module.exports = {

    findOne: function (req, res) {
        console.log(req.body)
        db.User.where(username, req.body.username)
            .then(dbModel => {
                console.log(dbModel);
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    },


    create: function (req, res) {
        console.log(req.body)
        db.User.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    update: function (req, res) {
        db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
