const express = require('express');
const informationController = require('../controllers/informationController');

const router = express.Router();

router.get('/', informationController.information_index);

module.exports = router;