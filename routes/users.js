const { userLogin } = require("../controllers/users");

const router = require("express").Router();

router.post("/login", userLogin);

module.exports = router;
