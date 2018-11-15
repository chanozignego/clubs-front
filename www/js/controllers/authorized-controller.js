angular
  .module('clubs-front')
  .controller('AuthorizedController', function($scope, $stateParams) {
    $scope.authorized = { id: 1, name: 'Nicolas Dominguez', date_in: "15/10/18",telephone:"(+54)11 510666213", dni: "40640688", date_in:'15/10/18'};
  })
