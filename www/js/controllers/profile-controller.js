angular
  .module('clubs-front')
  .controller('ProfileController', function($scope) {
    $scope.profile = [
      { name: 'Marcos Acuña',  },
      { email: 'marcosacuña@gmail.com', },
      { telephone: '(+54) 9 1151064530',  },
      { dni: '40670488',  },

    ];


  })
