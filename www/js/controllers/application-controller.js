angular
  .module('clubs-front')
  .controller('ApplicationController', function($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modalLogin) {
      $scope.modalLogin = modalLogin;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modalLogin.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modalLogin.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };



  // Form data for the register modal
  $scope.RegisterData = {};

  // Create the register modal that we will use later
  $ionicModal.fromTemplateUrl('templates/register.html', {
    scope: $scope
  }).then(function(modalSignUp) {
    $scope.modalSignUp = modalSignUp;
  });

  // Triggered in the register modal to close it
  $scope.closeRegister = function() {
    $scope.modalSignUp.hide();
  };

  // Open the Register modal
  $scope.register = function() {
    $scope.modalSignUp.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doRegister = function() {
    console.log('Doing register', $scope.registerData);

    // Simulate a register delay. Remove this and replace with your register
    // code if using a register system
    $timeout(function() {
      $scope.closeRegister();
    }, 1000);
  };
})
