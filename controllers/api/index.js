const router = require('express').Router();

const userRoutes = require('./user-routes');
const clothesRoutes = require('./clothes-routes')

router.use('/users', userRoutes);
router.use('/clothes', clothesRoutes);

module.exports = router;
