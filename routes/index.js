const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');
const loginRoutes = require('./api/login')

router.use("/api/login", loginRoutes)
router.use('/api', apiRoutes);

// router.use("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "client/public/index.html"))
// })

module.exports = router