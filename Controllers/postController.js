const User = require("../Models/Users")

async function addUser(req, res, next) {
    try {
        const {name, age, country, salary, post_id} = req.body
        const candidate = await User.findOne({name})
        if(candidate){
            return res.status(400).json({msg: "User already exists"})
        }
        const user = new User({name, age, country, salary, post_id})
        await user.save()
        return res.json({msg:"User added successfully"})
    }catch (e) {
        console.log(e)
    }
}

module.exports.addUser = addUser