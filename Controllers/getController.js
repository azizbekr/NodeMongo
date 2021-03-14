const db = require("../Models/Users")
async function getUsers(req, res, next) {
    console.log(req.url, req.method)
    res.json(req.url)
}
module.exports.getUsers = getUsers