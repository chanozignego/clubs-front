application
  .service('Auth', function($http, $ionicModal, $timeout) {

    this.initialize = function(scope) {
      this.initializeVariables(scope);
      this.initializeModals(scope);
      this.initializeFunctions(scope);
    };

    this.initializeVariables = function(scope) {
      scope.loginData = {};
      scope.RegisterData = {};
      scope.ForgotpassData = {};
    };

    this.initializeModals = function(scope) {
      $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: scope
      }).then(function(modalLogin) {
        scope.modalLogin = modalLogin;
      });

      $ionicModal.fromTemplateUrl('templates/register.html', {
        scope: scope
      }).then(function(modalSignUp) {
        scope.modalSignUp = modalSignUp;
      });

      $ionicModal.fromTemplateUrl('templates/forgotpass.html', {
        scope: scope
      }).then(function(modalForgotpass) {
        scope.modalForgotpass = modalForgotpass;
      });
    };

    this.initializeFunctions = function(scope) {
      this.initializeLoginFunctions(scope);
      this.initializeRegisterFunctions(scope);
      this.initializeForgotpassFunctions(scope);
    }

    this.initializeLoginFunctions = function(scope) {
      scope.closeLogin = function() {
        scope.modalLogin.hide();
      };

      scope.login = function() {
        scope.closeRegister();
        scope.closeChangepass();
        scope.closeForgotpass();
        scope.modalLogin.show();
      };

      scope.doLogin = function() {
        console.log('Doing login', scope.loginData);
        $timeout(function() {
          scope.closeLogin();
        }, 1000);
      };
    };

    this.initializeRegisterFunctions = function(scope) {
      scope.closeRegister = function() {
        scope.modalSignUp.hide();
      };

      scope.register = function() {
        scope.closeLogin();
        scope.closeForgotpass();
        scope.modalSignUp.show();
      };

      scope.doRegister = function() {
        console.log('Doing register', scope.registerData);
        $timeout(function() {
          scope.closeRegister();
        }, 1000);
      };
    };

    this.initializeForgotpassFunctions = function(scope) {
      scope.closeForgotpass = function() {
        scope.modalForgotpass.hide();
      };

      scope.forgotpass = function() {
        scope.closeRegister();
        scope.closeChangepass();
        scope.closeLogin();
        scope.modalForgotpass.show();
      };

      scope.doForgotpass = function() {
        console.log('Doing forgotpass', scope.forgotpassData);

        $timeout(function() {
          scope.closeForgotpass();
        }, 1000);
      };
    };

  });