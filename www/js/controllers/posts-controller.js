angular
  .module('clubs-front')
  .controller('PostsController', function($scope) {
    $scope.posts = [
      { title: 'Vuelve Music & House', img: "img/recreacion.jpg",time:"19:30",date: "15/7/2018" ,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",id: 1 },
      { title: 'Vuelve Music & House', img: "img/futbol.jpg",time:"19:30",date: "15/7/2018" ,id: 1 },
      { title: 'Vuelve Music & House', img: "img/basket.jpg",time:"19:30",date: "15/7/2018" ,id: 1 },
      { title: 'Vuelve Music & House', img: "img/adicciones.jpg",time:"19:30",date: "15/7/2018" ,id: 1 },
      { title: 'Vuelve Music & House', img: "img/recreacion.jpg",time:"19:30",date: "15/7/2018" ,id: 1 },

    ];
  })
