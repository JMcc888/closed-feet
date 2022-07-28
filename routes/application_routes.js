const express = require('express')
const router = express.Router()
const { newClient } = require('../controllers/application_controller')

router.route('/client').post(newClient)

module.exports = router