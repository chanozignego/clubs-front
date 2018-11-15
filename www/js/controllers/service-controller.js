angular
  .module('clubs-front')
  .controller('ServiceController', function($scope, $stateParams) {
      $scope.service = { id: 1, title: 'asd', description: "Venite al Recital de Damas Gratis - Entrada $200", date: "04/09/2018", place: "Cancha de futbol 11 - principal"};
  });
