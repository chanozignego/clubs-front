angular
  .module('clubs-front')
  .controller('ApplicationController', function($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.options = {loop: false,speed: 700, autoplay:'5000',
    };
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
      $scope.closeRegister();
      $scope.closeChangepass();
      $scope.closeForgotpass();
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
    $scope.closeLogin();
    $scope.closeChangepass();
    $scope.closeForgotpass();
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



$scope.ForgotpassData = {};


$ionicModal.fromTemplateUrl('templates/forgotpass.html', {
  scope: $scope
}).then(function(modalForgotpass) {
  $scope.modalForgotpass = modalForgotpass;
});


$scope.closeForgotpass = function() {
  $scope.modalForgotpass.hide();
};


$scope.forgotpass = function() {
  $scope.closeRegister();
  $scope.closeChangepass();
  $scope.closeLogin();
  $scope.modalForgotpass.show();
};


$scope.doForgotpass = function() {
  console.log('Doing forgotpass', $scope.forgotpassData);

  $timeout(function() {
    $scope.closeForgotpass();
  }, 1000);
};



$scope.ChangepassData = {};


$ionicModal.fromTemplateUrl('templates/changepass.html', {
  scope: $scope
}).then(function(modalChangepass) {
  $scope.modalChangepass = modalChangepass;
});


$scope.closeChangepass = function() {
  $scope.modalChangepass.hide();
};


$scope.changepass = function() {
  $scope.closeRegister();
  $scope.closeLogin();
  $scope.closeForgotpass();
  $scope.modalChangepass.show();
};


$scope.doChangepass = function() {
  console.log('Doing changepass', $scope.changepassData);

  $timeout(function() {
    $scope.closeChangepass();
  }, 1000);
};


$scope.EditprofileData = {};


$ionicModal.fromTemplateUrl('templates/editprofile.html', {
  scope: $scope
}).then(function(modalEditprofile) {
  $scope.modalEditprofile = modalEditprofile;
});


$scope.closeEditprofile = function() {
  $scope.modalEditprofile.hide();
};


$scope.editprofile = function() {
  $scope.closeRegister();
  $scope.closeLogin();
  $scope.closeForgotpass();
  $scope.modalEditprofile.show();
};


$scope.doEditprofile = function() {
  console.log('Doing editprofile', $scope.editprofileData);

  $timeout(function() {
    $scope.closeEditprofile();
  }, 1000);
};

$scope.EditauthorizedData = {};


$ionicModal.fromTemplateUrl('templates/editauthorized.html', {
  scope: $scope
}).then(function(modalEditauthorized) {
  $scope.modalEditauthorized = modalEditauthorized;
});


$scope.closeEditauthorized = function() {
  $scope.modalEditauthorized.hide();
};


$scope.editauthorized = function() {
  $scope.closeRegister();
  $scope.closeLogin();
  $scope.closeForgotpass();
  $scope.modalEditauthorized.show();
};


$scope.doEditauthorized = function() {
  console.log('Doing editauthorized', $scope.editauthorizedData);

  $timeout(function() {
    $scope.closeEditauthorized();
  }, 1000);
};

$scope.DeleteauthorizedData = {};


$ionicModal.fromTemplateUrl('templates/deleteauthorized.html', {
  scope: $scope
}).then(function(modalDeleteauthorized) {
  $scope.modalDeleteauthorized = modalDeleteauthorized;
});


$scope.closeDeleteauthorized = function() {
  $scope.modalDeleteauthorized.hide();
};


$scope.deleteauthorized = function() {
  $scope.closeRegister();
  $scope.closeLogin();
  $scope.closeForgotpass();
  $scope.modalDeleteauthorized.show();
};


$scope.doDeleteauthorized = function() {
  console.log('Doing deleteauthorized', $scope.deleteauthorizedData);

  $timeout(function() {
    $scope.closeDeleteauthorized();
  }, 1000);
};

$scope.AddauthorizedData = {};


$ionicModal.fromTemplateUrl('templates/addauthorized.html', {
  scope: $scope
}).then(function(modalAddauthorized) {
  $scope.modalAddauthorized = modalAddauthorized;
});


$scope.closeAddauthorized = function() {
  $scope.modalAddauthorized.hide();
};


$scope.addauthorized = function() {
  $scope.modalAddauthorized.show();
};

$scope.doAddauthorized = function() {
  console.log('Doing addauthorized', $scope.registerData);

  $timeout(function() {
    $scope.closeAddauthorized();
  }, 1000);
}



})
