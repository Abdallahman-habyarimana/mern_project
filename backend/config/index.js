const mongoose = require('mongoose');
// connect using m.lab
const { io } = require('./websocket');
// import all the config
const { config } =require('./config')
//connect to mongodb
var url = config.URL
//connect to the database using
mongoose.connect(url, { useNewUrlParser: true }, function(err) {
    // If error throw err
    if(err) { throw err }
    // If not print the message to the console cli
    console.log('Mongodb Connected.....')
    //connect to socket.io
    //console.log(io)
  });
module.exports = mongoose