const express = require('express');
const router = express.Router();
const Ninja = require('../database/models/ninja');
//get a list of ninjas from database
router.get('/ninjas',function(req, res){
  res.send({ type: 'GET' });
});
// add new  character
router.post('/ninjas',function(req, res){
  var ninja = new Ninja(req.body);
  ninja.save(function(err,result){
    if (err) {
      res.send(err);
    }else{
      res.send(result);
    }
  });
});
// update a character
router.put('/ninjas/:id?',function(req, res){
  res.send({ type: 'PUT' });
});
// delete character duhhhhhh
router.delete('/ninjas/:id?',function(req, res){
  console.log(req.params.id);
  Ninja.remove({'_id':req.params.id}, function(err,result){
    if (err) {
      res.send(err);
    }else{
      res.send(result);
    }
  });
});


module.exports = router;
