var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http',
function($scope, $http){
  var refresh = function(){
  $http.get('/resume').success(function($scope){
      $scope.resume = {'school': 'California State University, Los Angeles', 'degree': 'Computer Science, B.S.', 'last_year': '2018'};
    });

  };

  refresh();



}]);
