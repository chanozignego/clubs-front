application
  .service('Profile', function($http, $ionicModal, $timeout) {

    this.initialize = function(scope) {
      this.initializeVariables(scope);
      this.initializeModals(scope);
      this.initializeFunctions(scope);
    };

    this.initializeVariables = function(scope) {
      scope.ChangepassData = {};
      scope.EditprofileData = {};
    };

    this.initializeModals = function(scope) {
      $ionicModal.fromTemplateUrl('templates/profile/changepass.html', {
        scope: scope
      }).then(function(modalChangepass) {
        scope.modalChangepass = modalChangepass;
      });

      $ionicModal.fromTemplateUrl('templates/profile/edit.html', {
        scope: scope
      }).then(function(modalEditprofile) {
        scope.modalEditprofile = modalEditprofile;
      });
    };

    this.initializeFunctions = function(scope) {
      this.initializePasswordFunctions(scope);
      this.initializeProfileFunctions(scope);
    }

    this.initializePasswordFunctions = function(scope) {
      scope.closeChangepass = function() {
        scope.modalChangepass.hide();
      };

      scope.changepass = function() {
        scope.closeRegister();
        scope.closeLogin();
        scope.closeForgotpass();
        scope.modalChangepass.show();
      };

      scope.doChangepass = function() {
        console.log('Doing changepass', scope.changepassData);

        $timeout(function() {
          scope.closeChangepass();
        }, 1000);
      };
    };

    this.initializeProfileFunctions = function(scope) {
      scope.closeEditprofile = function() {
        scope.modalEditprofile.hide();
      };

      scope.editprofile = function() {
        scope.closeRegister();
        scope.closeLogin();
        scope.closeForgotpass();
        scope.modalEditprofile.show();
      };

      scope.doEditprofile = function() {
        console.log('Doing editprofile', scope.editprofileData);

        $timeout(function() {
          scope.closeEditprofile();
        }, 1000);
      };
    };

  });
