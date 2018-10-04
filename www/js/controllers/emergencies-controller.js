angular
  .module('clubs-front')
  .controller('EmergenciesController', function($scope) {
    $scope.posts = [
      { title: 'Vuelve Music & House', id: 1 },
      { title: 'Nuevo! Ampiación de proveduría', id: 2 },
      { title: 'Recomendaciones para limpieza de tanques', id: 3 },
      { title: 'La eficiencia energética', id: 4 },
      { title: 'Golf: Torneo inter clubes', id: 5 },
      { title: 'Tu vida sin bolsas de plástico', id: 6 }
    ];
  })