var express = require('express');
const fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/contactus', function(req, res, next) {
  res.render('contact',{ csrftoken: req.csrfToken() });
});
router.post('/contactus',function(req, res, next){
//validation
req.assert('fullName','Full Name is required!').notEmpty();
req.assert('message','Message is required!').notEmpty();
const errors = req.validationErrors();
if(errors){
  res.send(errors);
}
else{
//save data to file
const fullName = "Full Name: "+req.body.fullName;
const cType = "Type: "+req.body.cType;
const message = "Message: "+req.body.message;
fs.writeFile('./public/file/Contactus.txt', fullName + ", "+cType+", " + message, {encoding:'utf-8'}, (err) =>
{
  if(err)
    throw err
  });
  res.send("success");
}
});

module.exports = router;
