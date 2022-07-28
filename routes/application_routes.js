const express = require('express')
const router = express.Router()
const { newClient, getClients } = require('../controllers/application_controller')

router.route('/').get(getClients)
router.route('/client').post(newClient)

module.exports = router