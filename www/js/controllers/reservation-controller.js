angular
  .module('clubs-front')
  .controller('ReservationController', function($scope, $stateParams) {
    $scope.reservations = [
      { id: 1, bookeable:'Cancha de tenis',  date: '15/08/2018', time:'13:30 - 15:00', time_used: '1:30 horas', comments:'comentario',description:'Cancha 4', price:'250' },
      { id: 2, bookeable:'Cancha de futbol',  date: '10/08/2018', time:'13:30 - 15:00', time_used: '30 minutos', comments:'comentario',description:'Cancha 2', price:'300' },
      { id: 3, bookeable:'Quincho',  date: '5/08/2018', time:'13:30 - 15:00', time_used: '2 horas', comments:'comentario', description:'Quincho subsuelo', price:'450' },
      { id: 4, bookeable:'Paddle',  date: '12/07/2018', time:'13:30 - 15:00', time_used: '1 hora', comments:'comentario', description:'Cancha 6', price:'200' },
  })
