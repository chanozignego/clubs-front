angular
  .module('clubs-front')
  .controller('AuthorizationsController', function($scope) {
    $scope.authorizeds = [
      { name: 'Nicolas Dominguez', date_in:'15/10/18', id: 1 },
      { name: 'Nahitan Marin', date_in:'15/10/18', id: 1 },
      { name: 'Martin Perez', date_in:'15/10/18', id: 1 },
      { name: 'Carlos Wolsky', date_in:'15/10/18', id: 1 },
      { name: 'Diego Martinez', date_in:'15/10/18', id: 1 },


    ];
  })
