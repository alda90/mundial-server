const { Router } = require('express');
const { getFixtures, getFixturesByFecha, updateFixtures } = require('../controllers/fixtures');
const { validateJWT } = require('../middlewares/validate-jwt');
const router = Router();

router.get('/', validateJWT, getFixtures);
router.get('/:date', validateJWT, getFixturesByFecha);
router.put('/', validateJWT, updateFixtures);

module.exports = router;