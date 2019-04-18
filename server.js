// import all the package
const express  = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
// import the router from apiController
var apiController = require('./backend/routes/apiController');
// import the connection from the database
const { mongoose } = require('./backend/config/index')
// declare the express variable
var app = express();
// set the express use the body parse
app.use(bodyParser.json());
// set the cors to listen to this localhost with port 4000
app.use(cors());
// heruko port 
const PORT = process.env.PORT || 5050
// when the url is http://localhost:3000 print the message below 
app.get('/',(req, res) => {
    res.sendFile(__dirname + '/client/public/' + 'index.html')
})
// serve static files from the Public 
app.use(express.static(path.join(__dirname, '/client/build/')))
// set the express to listen to the server
app.listen(PORT, () => console.log('Server started at port :' + PORT));
// set the express api to listen when is http:localhost:3000/api
// all the route of the apiController
app.use('/api', apiController);
// anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
   res.sendFile(__dirname + '/client/build/' + 'index.html')
})