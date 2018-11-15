application
  .controller('HomeController', function($scope) {
    $scope.home = [
      { title: 'Conocé Todas la noticias y novedades del club', id: 1, go: "posts" },
      { title: '¡Participa en los eventos que tenemos para ofrecerte!', id: 2, go: "events" },
    ];
  })
