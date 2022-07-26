const express = require("express");
const router = express.Router();

const { Index, aboutUs, apply, applyClient, applyEmployee, contact, login } = require("../controllers/home_pages_controllers");

router.route("/").get(Index);
router.route('/about-us').get(aboutUs)
router.route('/apply').get(apply)
router.route('/apply/client').get(applyClient)
router.route('/apply/employee').get(applyEmployee)
router.route('/contact').get(contact)
router.route('/login').get(login)

module.exports = router;
