var express = require('express');
var router = express.Router();


router.use(function(req,res,next) {
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  var access_token = res.app.get('access_token');
  var refresh_token = res.app.get('refresh_token');

  res.render('question.html', { title: 'Musiquiz' , access_token, refresh_token, question: "Question", answer1: "Answer1", answer2: "Answer2", answer3: "Answer3", answer4: "Answer4"});

});

module.exports = router;
