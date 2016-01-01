var app = angular.module("app");

app.controller('loginController', function($scope, $location, UserFactory) {
  $scope.addUser = function(){
    UserFactory.setUsername($scope.username);
    $location.path('/topics');
  };
});
