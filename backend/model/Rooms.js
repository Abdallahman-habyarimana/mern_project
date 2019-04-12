const mongoose = require('mongoose');
const Schema = mongoose.Schema
var RoomSch = new Schema({
    room: {  type: String, required:true } ,
    date_created: { type: Date, required:true},
    edit_date: { type: Date, required:false},
    status: { type: Boolean, required:true}
});
var Rooms = mongoose.model('Rooms', RoomSch)
module.exports = { Rooms }