
const router = require('express').Router();
const loginRoutes = require('./login');
const signupRoutes = require('./signup')

router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);

module.exports = router