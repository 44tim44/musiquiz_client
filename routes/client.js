var express = require('express');
var router = express.Router();
const io = require('socket.io-client');

const socket = io.connect('http://localhost:8040');

socket.on('fromserver', message => {
    console.log(message);
});

router.post('/', (req, res) => {

    socket.emit('data', {
        firstName: req.body.fname,
        lastName: req.body.lname
    });

    res.redirect('/lobby');
});

router.get('/', function(req, res) {
    res.render('client.html', { title: 'Musiquiz'});
});

module.exports = router;
