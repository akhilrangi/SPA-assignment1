(function () {
'use strict';

var app = angular.module('LunchCheck', []);

app.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.placeholder="list comma separated dishes you usually have for lunch";
  $scope.msg = "";

  $scope.check = function () {
    var str = $scope.dishes;
    var count = 0;
    
    if(str != null && str != undefined && str != '')
    {
      str = str.split(',');
      count = str.length;
    }
    
    if (count >= 1 && count <= 3)
    {$scope.msg = "Enjoy!";}
    else if (count >= 4)
    {$scope.msg = "Too much!";}
    
  };
}
})();

