const express = require('express')
const router = express.Router()

const { addUser, usersPage, dashboard } = require('../controllers/admin_pages_controller')

const auth = require('../middleware/admin')
router.use(auth)

router.route('/').get(dashboard)
router.route('/users').get(usersPage)
router.route('/add-user').get(addUser)

module.exports = router