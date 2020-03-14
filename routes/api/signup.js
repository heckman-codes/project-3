const router = require('express').Router();
const userController = require('../../controllers/userController');

router
    .route('/signup')
    .post(userController.create)

module.exports = router