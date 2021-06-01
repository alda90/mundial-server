const { Router } = require('express');
const { getStandings, updateStanding } = require('../controllers/standings');
const { validateJWT } = require('../middlewares/validate-jwt');
const router = Router();

router.get('/', validateJWT, getStandings);
router.put('/', validateJWT, updateStanding);

module.exports = router;