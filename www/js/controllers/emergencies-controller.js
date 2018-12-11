angular
  .module('clubs-front')
  .controller('EmergenciesController', function($scope) {
    $scope.emergencies = [
      { title: 'Teléfono Policía', description: '911', telephone:'911', id: 1 },
      { title: 'Teléfono Bomberos', description: '110', telephone:'110', id: 2 },
      { title: 'Teléfono Emergencias del club', telephone:'123', description: 'Interno 1380', id: 3, },
      { title: 'Acceso Guardia Securitas', telephone:'123', description: 'Interno 1832', id: 4 },
      { title: 'Administración', telephone:'123', description: 'Interno 114', id: 5 },
      { title: 'Teléfono Asistencia médica', telephone:'123', description: 'Asistencia interna del Club', id: 6 }
    ];
  });
