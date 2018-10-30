angular
  .module('clubs-front')
  .controller('ServicesController', function($scope) {
    $scope.services = [
      { title: 'Jardinería', img:'img/gardening.png', id: 1 },
      { title: 'Plomería', img:'img/plumber.png',id: 2 },
      { title: 'Piletero', img:'img/pool.png', id: 3 },
      { title: 'Pintor', img:'img/paint.png', id: 5 },
      { title: 'Gasista', img:'img/gas.png', id: 4 },
      { title: 'Servicio de limpieza', img:'img/clean.png', id: 5 },
    ];
  })
