const router = require('express').Router();
const usersController = require('../../controllers/userController');

router
    .route('/')
    .get(usersController.create);

// Login should only get, put, delete
router
    .route('/signup')
    .get(usersController.findById)
    .put(usersController.update)
    .post(usersController.create)
    .delete(usersController.remove);

module.exports = router