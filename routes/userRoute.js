const router = require('express').Router();
const tokenController = require('../controllers/tokenController');
const userController = require('../controllers/userController');
const authentication = require('../middleware/authentication');
const checkIsDataExist = require('../middleware/checkIsDataExist');

router.get('/generateToken',tokenController.generate);
router.use(authentication);
router.get('/',userController.index);
router.post('/',userController.create);
router.get('/accountNumber/:accountNumber',userController.getByAccountNumber);
router.get('/identityNumber/:identityNumber',userController.getByIdentityNumber);
router.put('/:id',checkIsDataExist,userController.update);
router.patch('/:id',checkIsDataExist,userController.patch);
router.delete('/:id',checkIsDataExist,userController.destroy);

module.exports = router;