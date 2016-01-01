var app = angular.module("app");

app.factory('UserFactory', function($http) {
  var factory = {};

  factory.setUsername = function(username){
    localStorage.setItem("username", username);
  };

  factory.getUsername = function(){
      return localStorage.getItem("username");
  };

  factory.getUsers = function(callback){
    $http.get('/get-users').success(function(response){
      callback(response);
    });
  };

  factory.getOneUser = function(userId, callback){
    $http.get('/get-user/'+userId).success(function(response){
      callback(response);
    });
  };

  return factory;
});
