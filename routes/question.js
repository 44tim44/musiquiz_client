var express = require('express');
var router = express.Router();

const initDB = require("../public/javascripts/database").initDB;
const getDB = require("../public/javascripts/database").getDB;
var con;

router.use(function(req,res,next) {
  console.log("Retrieved DB.")
  con = getDB();
  next();
});


/* GET home page. */
router.get('/', function(req, res, next) {
  var access_token = res.app.get('access_token');
  var refresh_token = res.app.get('refresh_token');

  getQuestion(function (err, sql_result) {
    var obj = sql_result[0];
    res.render('question.html', { title: 'Musiquiz' , access_token, refresh_token, question: "Question", answer1: "Answer1", answer2: "Answer2", answer3: "Answer3", answer4: "Answer4"});
  });
});

module.exports = router;
