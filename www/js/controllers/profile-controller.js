angular
  .module('clubs-front')
  .controller('ProfileController', function($scope) {
    $scope.profile = [
      { name: 'Marcos Acuña', id: 1 },
      { email: 'marcosacuña@gmail.com', id: 2 },
      { telephone: '(+54) 9 1151064530', id: 3 },
      { Dni: '40670488', id: 4 },
      { password: '********', id: 5 },
    ];
  })
