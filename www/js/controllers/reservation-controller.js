angular
  .module('clubs-front')
  .controller('ReservationController', function($scope, $stateParams) {
    $scope.reservation = {
        id: 1,
        bookeable: 'Pabellon de tennis',
        date: '15/08/2018',
        time: '13:30 - 15:00',
        time_used: '1:30 horas',
        comments: 'comentario',
        description: 'Cancha 4',
        price: '250',
        paymentform: 'Tarjeta terminada en 4221'
      };
  });
