const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');
const loginRoutes = require('./api/login')
const signupRoutes = require('./api/signup')

router.use("/api", loginRoutes)
router.use("/api", signupRoutes)
router.use('/api', apiRoutes);

module.exports = router