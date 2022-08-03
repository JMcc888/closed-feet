const express = require('express')
const router = express.Router()

const { getUser, getUsers, updateUser, deleteUser } = require('../controllers/user_controller')

router.route('/').get(getUsers)
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)


module.exports = router