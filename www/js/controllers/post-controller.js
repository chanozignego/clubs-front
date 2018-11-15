application
  .controller('PostController', function($scope, post) {
    $scope.post = { id: 1, title: 'Alerta en River: "Pity" Martínez se retiró de la práctica',summary:'El mendocino encendió las alarmas en el plantel "Millonario", a cuatro días de la primera final de la Copa Libertadores', body: 'Gonzalo Pity Martínez no pudo finalizar esta mañana la práctica que River hizo a puertas cerradas en Ezeiza, en el segundo entrenamiento del plantel Millonario en la semana previa a la primera final de la Copa Libertadores que jugará el sábado próximo ante Boca en la Bombonera, debido a un cuadro gripal.El mendocino, pieza clave en el funcionamiento de River, deberá hacer reposo y mañana será estudiado para ver si podrá ser parte del entrenamiento que Gallardo programó para la tarde. si bien la práctica fue a puertas cerradas, el entrenador de River dispuso un equipo que se perfila como el que saldrá a jugar a la Bombonera con los siguientes nombres: Franco Armani; Gonzalo Montiel, Jonatan Maidana, Javier Pinola, Milton Casco; Enzo Pérez, Bruno Zuculini (o Ignacio Fernández), Exequiel Palacios, Gonzalo Pity Martínez, Rafael Santos Borré y Lucas Pratto.', date: "04/09/2018", place: "Colegio Newman - Eliseo Reclus 1133",  principal_image: "img/pity2.jpg", secondary_image: "img/pity1.jpg", assist: "76", time: "19:30", add:"img/add.png" };
    $scope.post = post;
    $scope.post.add = "img/add.png";
    $scope.post.secondary_image = "img/pity1.jpg";
    $scope.post.assist = "76";
    $scope.post.time = "19:30";
  });
