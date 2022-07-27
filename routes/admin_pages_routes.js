const express = require('express')
const router = express.Router()

const { addUser, usersPage, dashboard } = require('../controllers/admin_pages_controller')

router.route('/').get(dashboard)
router.route('/users').get(usersPage)
router.route('/add-user').get(addUser)

module.exports = router