const router = require('express').Router();
const travellerRoutes = require('./travellerRoutes');
const locationRoutes = require('./locationRoutes');
const tripRoutes = require('./tripRoutes');

router.use('/travellers', travellerRoutes);
router.use('/locations', locationRoutes);
router.use('/trips', tripRoutes);
// TODO: define 'trips' router

module.exports = router;
