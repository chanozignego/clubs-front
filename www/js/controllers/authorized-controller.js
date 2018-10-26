angular
  .module('clubs-front')
  .controller('AuthorizedController', function($scope, $stateParams) {
    $scope.authorized = { id: 1, name: 'Carlos', date_in: "15/10/18"};
  })
