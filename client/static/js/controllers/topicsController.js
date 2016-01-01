var app = angular.module("app");

app.controller('topicsController', function($scope, TopicFactory, UserFactory) {
  $scope.username = UserFactory.getUsername();

  TopicFactory.getTopics(function(data){
    $scope.topics = data;
  });

  $scope.addTopic = function(){
    $scope.submitted = true;

    var new_topic = $scope.new_topic;
    if(!new_topic ||
       !new_topic.title ||
       !new_topic.description ||
       !new_topic.category ||
       !$scope.username){
         return;
       }

    var topic = {
      title: $scope.new_topic.title,
      description: $scope.new_topic.description,
      category: $scope.new_topic.category,
      user: $scope.username
    };

    TopicFactory.addTopic(topic, function(response){
      if(response.status === 'success'){
        TopicFactory.getTopics(function(data){
          $scope.topics = data;
          $scope.submitted = false;
          $scope.new_topic = '';
        });
      }
    });
  };
});
