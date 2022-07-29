const express = require('express')
const router = express.Router()
const { newClient, getClients, getClient, editClientForm, editClient, deleteClient } = require('../controllers/application_controller')

const auth = require('../middleware/admin')

router.route('/').get(auth, getClients)
router.route('/client').post(newClient)
router.route('/:id').get(auth, getClient).put(auth, editClient).delete(auth, deleteClient)
router.route('/:id/edit').get(auth, editClientForm)

module.exports = router