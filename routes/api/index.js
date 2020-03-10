
const router = require('express').Routeer();
const loginRoutes = require('./login');

router.use('/login', loginRoutes);

module.exports = router