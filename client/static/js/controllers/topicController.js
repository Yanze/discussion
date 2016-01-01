var app = angular.module("app");

app.controller('topicController', function($scope,
                                           $routeParams,
                                           TopicFactory,
                                           UserFactory,
                                           AnswerFactory) {

  $scope.username = UserFactory.getUsername();

  TopicFactory.getTopicById($routeParams.id,function(data){
    $scope.topic = data;
  });

  $scope.addAnswer = function(){
    $scope.submitted = true;

    var new_answer = $scope.new_answer;
    if(!new_answer ||
       !new_answer.text ||
       new_answer.text.length < 10 ||
       new_answer.text.length > 140 ||
       !$scope.username){
      return;
    }

    var answer = ({
      text: $scope.new_answer.text,
      topic_id: $scope.topic._id,
      username: $scope.username
    });

    AnswerFactory.addAnswer(answer, function(response){
      if(response.status === 'success'){
        TopicFactory.getTopicById($routeParams.id,function(data){
          $scope.topic = data;
        });
      }
    });
  };

});
