const express = require("express");
const router = express.Router();

const { Index, aboutUs, apply, applyClient, applyEmployee, contact, login, success } = require("../controllers/home_pages_controllers");
const { createMessage } = require('../controllers/message_controller') 

router.route("/").get(Index);
router.route('/about-us').get(aboutUs)
router.route('/apply').get(apply)
router.route('/apply/client').get(applyClient)
router.route('/apply/employee').get(applyEmployee)
router.route('/contact').get(contact).post(createMessage)
router.route('/login').get(login)
router.route('/success').get(success)

module.exports = router;
