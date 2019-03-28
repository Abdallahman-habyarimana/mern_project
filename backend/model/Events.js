const mongoose = require('mongoose');
const Schema = mongoose.Schema
var EventSchema = new Schema({
    type: { type: String,required:true },
    date : { type: Date, required:true }, 
    time: { type: Date, required:true },
    ppid: { type: String, required:true},
});
var Events = mongoose.model('Events', EventSchema)
module.exports = { Events }