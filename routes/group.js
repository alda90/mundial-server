const { Router } = require('express');
const { getGroups, updateGroup } = require('../controllers/group');
const { validateJWT } = require('../middlewares/validate-jwt');
const router = Router();

router.get('/', validateJWT, getGroups);
router.put('/', validateJWT, updateGroup);

module.exports = router;