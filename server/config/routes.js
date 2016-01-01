var topics = require('./../controllers/topics.js');
var users = require('./../controllers/users.js');
var answers = require('./../controllers/answers.js');

module.exports = function(app){
  app.get('/get-topics', topics.getTopics);
  app.get('/get-topic/:id', topics.getTopicById);
  app.get('/get-user/:id', users.getOneUser);
  app.post('/add-topic', topics.add);
  app.get('/get-users', users.show);
  app.post('/add-answer', answers.addAnswer);
  app.get('/get-answers/:id', answers.showAnswers);
};
