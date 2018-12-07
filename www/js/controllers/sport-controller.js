angular
  .module('clubs-front')
  .controller('SportController', function($scope) {
    $scope.sport = [
      { id: 1, title: 'Rugby', img: "img/rugby.png"},
    ];
  })
