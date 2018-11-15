application
  .controller('EventController', function($scope, event) {
    $scope.event = event;
    //$scope.event = { id: 1, name: 'Vivi tu vocación y transforma la realidad.', description: "Los invitamos a una charla donde van a estar @CocoOderigo, @catahornos y @RamonLanus hablando sobre vivir tu vocación y transformar la realidad.",formatted_date: "04/09/2018 18.30hs", date: "04/09/2018", place: "Colegio Newman - Eliseo Reclus 1133", image: "img/event.jpg", assist: "76", time: "19:30" };
    $scope.event.assist = "76";
  })
