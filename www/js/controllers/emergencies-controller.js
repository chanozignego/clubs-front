angular
  .module('clubs-front')
  .controller('EmergenciesController', function($scope) {
    $scope.emergencies = [
      { title: 'Llamar Emergencias del club', description: 'Descripcion', id: 1, },
      { title: 'Llamar Policia',description: 'Descripcion', id: 2 },
      { title: 'Llamar Bomberos',description: 'Descripcion', id: 3 },
      { title: 'Llamar Asistencia medica',description: 'Descripcion', id: 4 },


    ];
  })
