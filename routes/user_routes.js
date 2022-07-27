const express = require('express')
const router = express.Router()

const { logout, login, register } = require('../controllers/user_controller')

// Register and Login Routes
router.route('/login').post(login)
router.route('/register').post(register)
router.route('/logout').get(logout)

module.exports = router