const express = require("express");
const router = express.Router();

// Message post is handled in homepageroutes
const { getMessage, getMessages, deleteMessage } = require('../controllers/message_controller')

const auth = require('../middleware/admin')

router.route('/').get(getMessages)
router.route('/:id').get(getMessage).delete(deleteMessage)

module.exports = router