const {Schema, model} = require("mongoose")

const Users = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    country: {type: String, required: true},
    salary: {type: Number, required: true},
    post_id: {type: Number, required: true}
}, {collection: 'users'})
module.exports = model('Users', Users, 'users')