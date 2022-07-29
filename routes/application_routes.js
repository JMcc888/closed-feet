const express = require('express')
const router = express.Router()
const { newClient, getClients, getClient, editClientForm, editClient, deleteClient } = require('../controllers/application_controller')

router.route('/').get(getClients)
router.route('/client').post(newClient)
router.route('/:id').get(getClient).put(editClient).delete(deleteClient)
router.route('/:id/edit').get(editClientForm)

module.exports = router