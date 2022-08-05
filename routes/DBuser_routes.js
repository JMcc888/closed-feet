const express = require('express')
const router = express.Router()

const { getUser, getUsers, updateUser, deleteUser, addUser, editUserForm } = require('../controllers/user_controller')

const auth = require('../middleware/admin')
router.use(auth)

router.route('/').get(getUsers)
router.route('/add-user').get(addUser)
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)
router.route('/:id/edit').get(editUserForm)

module.exports = router