const path = require('path');
const router = require('express').Router();
const loginRoutes = require('./api/login')
const signupRoutes = require('./api/signup')

router.use("/api", loginRoutes)
router.use("/api", signupRoutes)

module.exports = router