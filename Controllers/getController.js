const db = require("../Models/Users")
async function getUsers(req, res, next) {
    console.log(req.route)
    res.json(req.route)
}
module.exports.getUsers = getUsers