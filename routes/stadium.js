const { Router } = require('express');
const { getStadiums, updateStadium } = require('../controllers/stadium');
const { validateJWT } = require('../middlewares/validate-jwt');
const router = Router();

router.get('/', validateJWT, getStadiums);
router.put('/', validateJWT, updateStadium);

module.exports = router;