application
  .controller('ReservationsController', function($scope) {
    $scope.reservations = [
      { id: 1, bookeable:'Tennis',  date: '15/08/2018', time:'13:30 - 15:00', time_used: '1:30 horas', comments:'comentario',description:'Cancha 4', price:'250', img:'img/tennis.png' },
      { id: 2, bookeable:'Futbol 5',  date: '10/08/2018', time:'13:30 - 15:00', time_used: '30 minutos', comments:'comentario',description:'Cancha 2', price:'300', img:'img/football.png' },
      { id: 3, bookeable:'Quincho',  date: '05/08/2018', time:'13:30 - 15:00', time_used: '2 horas', comments:'comentario', description:'Subsuelo', price:'450', img:'img/meal.png' },
      { id: 4, bookeable:'Rugby',  date: '12/07/2018', time:'10:00 - 12:00', time_used: '1 hora', comments:'comentario', description:'Cancha 6', price:'200', img:'img/rugby.png' },

    ];
  })
