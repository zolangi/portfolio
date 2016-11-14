var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http',
function($scope, $http){
  console.log("Hello World from controller");


/*  person1 = {
    name: "Popeye",
    email: "popeye@gmail.com",
    number: "111-222-3333"
  };

  person2 = {
    name: "Brutus",
    email: "brutus@gmail.com",
    number: "111-222-7777"
  };

  person3 = {
    name: "Olive Oil",
    email: "olive_oil@gmail.com",
    number: "111-222-9999"
  };
*/
//  var contactlist = [person1, person2, person3];
//  $scope.contactlist = contactlist;

  var refresh = function(){
  //this is the request done by the server
  $http.get('/contactlist').success(function(response){
      console.log("Got data!");
      //$scope.contactlist = response;
      //console.log("I got the data I requested");
      $scope.contactlist = response;
      $scope.contact = "";
    });

  };

  refresh();

  $scope.addContact = function(){
      console.log($scope.contact);
      $http.post('/contactlist', $scope.contact).success(function(response){
        console.log(response);
        refresh();
      });
    };

  $scope.remove = function(id){
      console.log(id);
      $http.delete('/contactlist/' + id).success(function(response){
        refresh();
      });
  };

  $scope.edit = function(id){
    console.log(id);
    $http.get('/contactlist/' + id).success(function(response){
      $scope.contact = response;
    });
  };

  $scope.update = function(){
      console.log($scope.contact._id);
      $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response){refresh();})
  };

  $scope.deselect = function(){
    $scope.contact = "";
  }
}]);

/*
$scope.addContact = function(){
  $http.post('/contactlist', $scope.contact).success(function(respons, request){
    conosle.log(response);
    refresh();
  });
};

$scope.remove = function(id){
console.log(id);
}*/

//})
//}
