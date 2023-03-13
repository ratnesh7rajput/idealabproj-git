var express = require('express');
var router = express.Router();
var connection = require('../database.js');
var nodemailer = require('nodemailer');
var randtoken = require('rand-token');
//send email
function sendEmail(email, token) {
  var email = email;
  var token = token;
  var mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '', // Your email id
      pass: '' // Your password
    }
  });
  var mailOptions = {
    from: 'jainriddhi030@gmail.com',
    to: email,
    subject: 'Email verification - Ecourt',
    html: '<p>You requested for email verification, kindly use this <a href="http://localhost:3000/verify-email?token=' + token + '">link</a> to verify your email address</p>'
  };
  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      return 1
    } else {
      return 0
    }
  });
}

router.get('/', function (req, res, next) {
  res.render('/view')
  res.send('Welcome')
  // res.sendFile('C:\Users\Riddhi Jain\OneDrive\Desktop\IdeaProject\idea-lab\Frontend\src\Login.js')
});

/* home page */
router.get('/login', function (req, res, next) {
  res.send('login page')
  // res.sendFile('C:\Users\Riddhi Jain\OneDrive\Desktop\IdeaProject\idea-lab\Frontend\src\Login.js')
});

/* send verification link */
router.post('/send-email', function (req, res, next) {
  var email = req.body.email;
  //console.log(sendEmail(email, fullUrl));
  connection.query('SELECT * FROM verifications WHERE email ="' + email + '"', function (err, result) {
    if (err) throw err;
    var type = 'success'
    var msg = 'Email already verified'
    console.log(result[0]);
    if (result.length > 0) {
      var token = randtoken.generate(20);
      if (result[0].verify == 0) {
        var sent = sendEmail(email, token);
        if (sent != '0') {
          var data = {
            token: token
          }
          connection.query('UPDATE verifications SET ? WHERE email ="' + email + '"', data, function (err, result) {
            if (err) throw err
          })
          type = 'success';
          msg = 'The verification link has been sent to your email address';
        } else {
          type = 'error';
          msg = 'Something goes to wrong. Please try again';
        }
      }
    } else {
      console.log('2');
      type = 'error';
      msg = 'The Email is not registered with us';
    }
    req.flash(type, msg);
    res.redirect('/');
  });
})
/* verification email link */
router.get('/verify-email', function (req, res, next) {
  connection.query('SELECT * FROM verifications WHERE token ="' + req.query.token + '"', function (err, result) {
    if (err) throw err;
    var type
    var msg
    console.log(result[0].verify);
    if (result[0].verify == 0) {
      if (result.length > 0) {
        var data = {
          verify: 1
        }
        connection.query('UPDATE verifications SET ? WHERE email ="' + result[0].email + '"', data, function (err, result) {
          if (err) throw err
        })
        type = 'success';
        msg = 'Your email has been verified';
      } else {
        console.log('2');
        type = 'success';
        msg = 'The email has already verified';
      }
    } else {
      type = 'error';
      msg = 'The email has been already verified';
    }
    req.flash(type, msg);
    res.redirect('/');
  });
})
module.exports = router;