angular
  .module('clubs-front')
  .controller('EmergencyController', function($scope, $stateParams) {
    $scope.emergency = { title: 'Llamar Policia', address: 'Av. Santa Fe 2255', description: '911', id: 1 };
  })