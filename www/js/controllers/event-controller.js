angular
  .module('clubs-front')
  .controller('EventController', function($scope, $stateParams) {
    $scope.event = { id: 1, title: 'Vivi tu vocación y transforma la realidad.', description: "Los invitamos a una charla donde van a estar @CocoOderigo, @catahornos y @RamonLanus hablando sobre vivir tu vocación y transformar la realidad.", date: "04/09/2018", place: "Colegio Newman - Eliseo Reclus 1133", img: "img/event.jpg", assist: "76", time: "19:30" };
  })
