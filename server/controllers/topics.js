var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');

module.exports = (function(){
  return{

    getTopics: function(req, res){
      Topic.find({}).populate('_user').exec(function(err, topics){
        res.json(topics);
      });
    },

    getTopicById: function(req, res){
      Topic.findOne({_id: req.params.id})
        .populate('_user', 'name')
        .populate({
          path: 'answers',
          populate: {
              path: '_user',
              select: 'name'
          }
        })
        .exec(function(err, topic){
          res.json(topic);
      });
    },

    add: function(req, res){
      User.findOne({name: req.body.user}, function(err, user){
        var current_user;
        var userId;
        if(!user){
          var new_user = new User({
            name: req.body.user,
            topics: []
          });
          new_user.save();
          current_user = new_user;
          userId = new_user._id;
        }
        else{
          userId = user._id;
          current_user = user;
        }

        // after find user id, add new topic;
        var topic = new Topic({
          title: req.body.title,
          description: req.body.description,
          category: req.body.category,
          _user: userId
        });

// save topic and push topic into current user's topics array;
        topic.save(function(err){
          if(err){
            res.json({
              status:"error",
              message: "Something went wrong..."
            });
          }else{
            current_user.topics.push(topic);
            current_user.save(function(err){
              res.json({
                status:"success",
                message: "Successfully added!"
              });
            });
          }
        });
      });
    },

 };
})();
