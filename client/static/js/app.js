var app = angular.module("app", ["ngRoute" ,"ngMessages"]);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'static/partials/login.html',
    controller: "loginController"
  })
  .when('/topics', {
    templateUrl: 'static/partials/topics.html',
    controller: "topicsController"
  })
  .when('/topic/:id', {
    templateUrl: 'static/partials/topic.html',
    controller: "topicController"
  })
  .when('/user/:id', {
    templateUrl: 'static/partials/user.html',
    controller: "userController"
  });
});
