var app = angular.module("app");

app.factory('TopicFactory', function($http) {
  var factory = {};
  factory.getTopicById = function(topicId, callback){
    $http.get('/get-topic/'+topicId).success(function(response){
      callback(response);
    });
  };

  factory.getTopics = function(callback){
    $http.get('/get-topics').success(function(response){
      callback(response);
    });
  };

  factory.addTopic = function(topic, callback){
    $http.post("/add-topic", topic).success(function(response){
      callback(response);
    });
  };

  return factory;
});
