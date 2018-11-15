application
  .controller('PostsController', function($scope, posts) {
    $scope.posts = [
      { title: 'Alerta en River: "Pity" Martínez se retiró de la práctica', principal_image: "img/pity1.jpg",time:"19:30",date: "15/7/2018" ,summary:"El mendocino encendió las alarmas en el plantel Millonario, a cuatro días de la primera final de la Copa Libertadores",id: 1 },
      { title: 'Arde la reventa: las astronómicas cifras que piden por una entrada', principal_image: "img/reventa.jpg",summary:'El "Xeneize" recién comenzó con el expendio para los socios abonados, sin embargo, ya hay sitios que ofrecen tickets en números impactantes',time:"19:30",date: "15/7/2018" ,id: 1 },
      { title: 'El desafío personal que tendrá Borré en las finales ante Boca', principal_image: "img/borre.jpg",time:"19:30",date: "15/7/2018",summary:"El colombiano, uno de los seis futbolistas de River que está en capilla con las tarjetas amarillas, es el delantero que más le respondió a Marcelo Gallardo desde el comienzo de las series mano a mano en la Copa Libertadores" ,id: 1 },
      { title: 'Donald Trump pone a prueba su hegemonía local y su proyecto de poder global en los comicios de medio término', principal_image: "img/trump.jpg",summary:"Se renuevan las 435 bancas de la Cámara de Representantes y un tercio del Senado",time:"19:30",date: "15/7/2018" ,id: 1 },
      { title: 'Astrónomos de Harvard postularon que el misterioso objeto interestelar Oumuamua es una nave extraterrestre', principal_image: "img/extraterrestre.jpg",summary:"Fue observado por primera vez en octubre de 2017. Se lo clasificó como cometa y luego como asteroride, sin que tenga las características de ninguno. Una nueva investigación plantea que podría ser una sonda. Y que no ha sido fabricada en la Tierra",time:"19:30",date: "15/7/2018" ,id: 1 },

    ];
    $scope.posts = posts;
  });
