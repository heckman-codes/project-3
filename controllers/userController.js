
const db = require("../models");

// Defining methods for the postsController
module.exports = {
    findById: function (req, res) {
        db.User.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // findById: function (req, res) {
    //     console.log(req.body)
    //     db.User
    //         .findOne({
    //             where: { username: req.body.username }
    //         })

    //         // findOne(conditions ?: FilterQuery < T >,
    //         //     callback ?: (err: any, res: T | null) => void): DocumentQuery<T | null, T, QueryHelpers> & QueryHelpers;

    //         .then(dbModel => {
    //             res.json(dbModel)
    //             console.log(dbModel)
    //         })
    //         .catch(err => res.status(422).json(err))
    // },

    // signup to create new user to database
    create: function (req, res) {
        console.log(req.body)
        db.User.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
};
