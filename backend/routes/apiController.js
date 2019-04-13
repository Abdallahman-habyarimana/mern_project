const express = require('express');
var router = express.Router();

// declare variable for clients 
var { ChatRoom } = require('../model/ChatRoom');
var { Events } = require('../model/Events');
//var { RoomHistory } = require('../model/RoomHistory')
var { Rooms } = require('../model/Rooms')
var { Admin } = require('../model/Admin')

// get all chat history lcohost:300/api/histor
router.get('/history', (req, res) => {
    ChatRoom.find((err, docs) => {
        if (!err) { res.send(docs);}
        else { console.log('Error in Retrieving:' + JSON.stringify(err, undefined, 2));
    }
    })
})

// get all all room lcohost:300/api/histor
router.get('/get/all/room', (req, res) => {
    Rooms.find((err, docs) => {
        if (!err) { res.send(docs);}
        else { console.log('Error in Retrieving:' + JSON.stringify(err, undefined, 2));
    }
    })
})


// get all Event
router.get('/eventlog', (req, res) => {
    Events.find((err, docs) => {
        if (!err) { res.send(docs);}
        else { console.log('Error in Retrieving:' + JSON.stringify(err, undefined, 2));
    }
    })
})

router.get('/roomhistory/:room', (req, res) => {
    ChatRoom.where('room').equals(req.params.room).exec((err, docs) => {
        if (!err) { res.send(docs);}
        else { console.log('Error in Retrieving:' + JSON.stringify(err, undefined, 2)); }
    })
})


router.post('/admin', (req, res) => {
    let { username, password} = req.body
    
      var admin = new Admin({
        username: username,
        password: password,
      })

      admin.save()
        .then(user => res.status(200).json(admin))
        .catch(err => res.status(400).json({ error: err })) 
      })


router.post('/admin/add/room', (req, res) => {
    let { room, status } = req.body

    var rooms = new Rooms({
        room:room,
        date_created: Date.now(),
        edit_date: null,
        status:status
    })
    rooms.save()
    .then(rom => res.send(rom))
    .catch(err => res.status(400).json({ error: err })) 
})

router.post('/admin/login/:name&:pass', (req, res) => {
    Admin.where('username').equals(req.params.name).where('password').equals(req.params.pass).exec((err, doc)=> {
        if(!err) { 
            //res.redirect('http://localhost:3000/events');
            res.send(doc)
         }
        else { res.status(400).json({error: err}) }
    })
})

module.exports = router;