application
  .controller('ApplicationController', function($scope, $ionicModal, $timeout, $ionicLoading, Auth, Profile) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    Auth.initialize($scope);
    Profile.initialize($scope);

    $scope.$on('$ionicView.beforeEnter', function(e) {
      $ionicLoading.show({
          animation: 'fade-in', showBackdrop: true
      });
    });

    $scope.$on('$ionicView.afterEnter', function(e) {
      $ionicLoading.hide();
    });

  })
