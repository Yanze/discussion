var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');

module.exports = (function(){
  return{
    show: function(req, res){
      User.find({}).populate('topics').exec(function(err, users){
        res.json(users);
      });
    },

    getOneUser: function(req, res){
      User.find({_id: req.params.id}).populate('answers').populate('topics').exec(function(err, user){
        res.json(user);
      });
    },

 };
})();
