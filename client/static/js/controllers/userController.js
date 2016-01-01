var app = angular.module("app");

app.controller('userController', function($scope, $location, $routeParams, UserFactory) {
  console.log(UserFactory.current_username);
});
