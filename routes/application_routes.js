const express = require('express')
const router = express.Router()
const { newClient, getClients, getClient } = require('../controllers/application_controller')

router.route('/').get(getClients)
router.route('/client').post(newClient)
router.route('/:id').get(getClient)

module.exports = router