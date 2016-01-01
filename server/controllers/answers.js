var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');
var Answer = mongoose.model('Answer');

module.exports = (function() {
  return {
    showAnswers: function(req, res) {
      Answer.find({
        _topic: req.params.id
      }, function(err, answers) {
        if (err) {
          res.json(err);
        } else {
          res.json(answers);
        }
      });
    },

    addAnswer: function(req, res) {

      var answer = req.body;

      User.findOne({name: answer.username}, function(err, user) {

        var current_user;
        if (!user) {
          var new_user = new User({
            name: answer.username,
            topics: [],
            answers:[]
          });
          new_user.save();
          current_user = new_user;
        } else {
          current_user = user;
        }

        Topic.findOne({_id: answer.topic_id}, function(err, topic) {

          var new_answer = new Answer({
            text: answer.text,
            likes: 0,
            unlikes: 0,
            _topic: topic._id,
            _user: current_user._id
          });

          new_answer.save(function(err) {
            if (err) {
              res.json({
                status: "error",
                message: "Something went wrong...!"
              });
            } else {

              current_user.answers.push(new_answer);
              current_user.save();

              topic.answers.push(new_answer);
              topic.save();

              res.json({
                status: "success",
                message: "Successfully added !"
              });
            }
          });
        });
      });
    },

  };
})();
