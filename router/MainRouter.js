const Router = require("express")
const getController = require("../Controllers/getController")
const postController = require("../Controllers/postController")
const router = new Router()

router.get("*/", getController.getUsers)
router.post("/addUser", postController.addUser)

module.exports = router