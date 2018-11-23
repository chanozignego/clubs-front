angular
  .module('clubs-front')
  .controller('AuthorizedController', function($scope, $stateParams, $state, Api, toaster, authorized) {
    $scope.authorized = authorized;

    $scope.deleteAuthorized = function() {
      Api
        .deleteAuthorized($scope.authorized.id)
        .then((data) => toaster.pop('success', "Autorizado", "Eliminado correctamente"))
        .then(() => $state.go('app.authorizations'))
        .catch((error) => {toaster.pop('error', "Autorizado", "Ha ocurrido un error")});
    };

  })
