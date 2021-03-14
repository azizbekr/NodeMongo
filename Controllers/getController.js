const Users = require("../Models/Users")
async function getUsers(req, res, next) {
    
    const usersList = await Users.find()
    // console.log(usersList)
    res.json(usersList)
}
module.exports.getUsers = getUsers