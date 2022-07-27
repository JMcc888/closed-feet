const express = require('express')
const router = express.Router()

const { addUser } = require('../controllers/admin_pages_controller')

router.route('/')
router.route('/users')
router.route('/add-user').get(addUser)

module.exports = router