application
  .controller('AuthorizationsController', function($scope, $ionicModal, $state, toaster, authorizations, Api) {
    $scope.authorizeds = authorizations;

    $scope.authorizedData = {};

    $ionicModal.fromTemplateUrl('templates/authorizations/create.html', {
      scope: $scope
    }).then(function(modalAddauthorized) {
      $scope.modalAddauthorized = modalAddauthorized;
    });

    $scope.closeAddAuthorized = function() {
      $scope.modalAddauthorized.hide();
    };

    $scope.addAuthorized = function() {
      $scope.modalAddauthorized.show();
    };

    $scope.doAddauthorized = function() {
      Api
        .createAuthorized($scope.authorizedData)
        .then((data) => toaster.pop('success', "Autorizado", "Creado correctamente"))
        .then(() => $scope.closeAddauthorized())
        .then(() => $state.go('app.authorizations'))
        .catch((error) => {toaster.pop('error', "Autorizado", "Ha ocurrido un error")});
    };

    $scope.deleteAuthorized = function(authorized) {
      Api
        .deleteAuthorized(authorized.id)
        .then((data) => toaster.pop('success', "Autorizado", "Eliminado correctamente"))
        .then(() => $state.go('app.authorizations'))
        .catch((error) => {toaster.pop('error', "Autorizado", "Ha ocurrido un error")});
    };

  })
