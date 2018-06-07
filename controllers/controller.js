var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http',
function($scope, $http){
  var refresh = function(){
  $http.get('/resume').success(function($scope){
      
    });

  };

  refresh();



}]);
