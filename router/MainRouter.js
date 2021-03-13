const Router = require("express")
const getController = require("../Controllers/getController")
const router = new Router()

router.get("/", getController.getUsers)

module.exports = router