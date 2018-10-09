angular
  .module('clubs-front')
  .controller('EventController', function($scope, $stateParams) {
    $scope.event = { id: 1, title: 'Recital Damas Gratis', description: "Venite al Recital de Damas Gratis - Entrada $200", date: "04/09/2018", place: "Cancha de futbol 11 - principal"};
  })