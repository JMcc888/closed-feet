const express = require('express')
const router = express.Router()

const { addUser, dashboard } = require('../controllers/admin_pages_controller')

const auth = require('../middleware/admin')
router.use(auth)

router.route('/').get(dashboard)
router.route('/add-user').get(addUser)

module.exports = router