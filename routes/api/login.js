const router = require('express').Router();
const userController = require('../../controllers/userController');

router
    .route('/login/:user')
    .get(userController.findByUsername);

// router
//     .route('/login/:id')
//     .get(userController.findById);

module.exports = router;
