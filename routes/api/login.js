const router = require('express').Router();
const usersController = require('../../controllers/userController');

// Login should only get, put, delete
router
    .route('/login')
    .get(usersController.findOne)
    .put(usersController.update)
    .post(usersController.create)
    .delete(usersController.remove);

module.exports = router;