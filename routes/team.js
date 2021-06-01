const { Router } = require('express');
const { getTeams, updateTeam } = require('../controllers/team');
const { validateJWT } = require('../middlewares/validate-jwt');
const router = Router();

router.get('/', validateJWT, getTeams);
router.put('/', validateJWT, updateTeam);


module.exports = router;