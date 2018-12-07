angular
  .module('clubs-front')
  .controller('SportsController', function($scope) {
    $scope.sports = [
      { id: 1, title: 'Rugby', img: "img/rugby.png"},
      { id: 2, title: 'Fùtbol',img: "img/football.png"},
      { id: 3, title: 'Tennis',img: "img/tennis.png"},
      { id: 4, title: 'Golf', img: "img/golf.png"},
      { id: 5, title: 'Bridge',img: "img/bridge.png"},
      { id: 6, title: 'Hìpica', img: "img/hipica.png"},
      { id: 7, title: 'Menores',img: "img/child.png"}
    ];
  })
