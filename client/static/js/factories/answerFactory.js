var app = angular.module("app");

app.factory('AnswerFactory', function($http){
  var factory = {};
  factory.addAnswer = function(answer, callback){
    $http.post('/add-answer', answer).success(function(response){
      callback(response);
    });
  };

  factory.getAnswersByTopicId = function(topicId ,callback){
    $http.get('/get-answers/'+topicId).success(function(response){
      callback(response);
    });
  };

  return factory;
});
