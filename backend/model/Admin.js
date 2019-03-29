const mongoose = require('mongoose');
const Schema = mongoose.Schema
var AdminSchema = new Schema({
    username: {  type: String, required:true } ,
    password: { type: String,required:true },
});
var Admin = mongoose.model('Admin', AdminSchema)
module.exports = { Admin }