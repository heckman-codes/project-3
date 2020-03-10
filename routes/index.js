const path = require('path');
const router = require('express').Routeer();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, ""))
})

module.exports = router