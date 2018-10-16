angular
  .module('clubs-front')
  .controller('EmergenciesController', function($scope) {
    $scope.emergencies = [
      { title: 'Llamar Policia', description: '911', id: 1 },
      { title: 'Llamar Bomberos', description: '110', id: 2 },
      { title: 'Llamar Emergencias del club', description: 'Interno 1380', id: 3, },
      { title: 'Acceso Guardia Securitas', description: 'Interno 1832', id: 4 },
      { title: 'Administracion', description: 'Interno 114', id: 5 },
      { title: 'Llamar Asistencia medica', description: 'Asistencia interna del Club', id: 6 }
    ];
  });
