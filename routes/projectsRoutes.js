const express = require('express');
const projectController = require('../controllers/projectContoller');

const router = express.Router();

router.get('/', projectController.project_index);

module.exports = router;