angular
  .module('clubs-front')
  .controller('UsefulDataController', function($scope) {

    $scope.contacts = [
      {id: "1", name: "Emergencias", description: "Interno 1911", phone: "(011) 3221-7101", email: ""},
      {id: "2", name: "Acceso Guardia Securitas", description: "Interno 1104", phone: "(011) 3221-7101", email: ""},
      {id: "3", name: "Conmutador", description: "", phone: "", email: "conmutador@simpit.com"},
      {id: "4", name: "Administración", description: "", phone: "0800-3221", email: ""},
      {id: "5", name: "Secretaría Golf", description: "Interno 1110", phone: "(011) 3221-7101", email: ""},
      {id: "6", name: "Secretaría Sector Deportivo", description: "", phone: "", email: "sectordeportivo@simpit.com"}
    ];

    $scope.documents = [
      {id: "1", title: "Preguntas Frecuentes", url: "https://twitter.com/" },
      {id: "2", title: "Reglamento de Construcción", url: "https://twitter.com/" },
      {id: "3", title: "Reglamento de Convivencia", url: "https://twitter.com/" },
      {id: "4", title: "Masterplan", url: "https://twitter.com/" },
      {id: "5", title: "Libro de Actas", url: "https://twitter.com/" }
    ];

    $scope.instructions = [
      {id: "1", title: "Cómo hacer invitaciones", url: "https://twitter.com/" },
      {id: "2", title: "Cargar grupo familiar", url: "https://twitter.com/" },
      {id: "3", title: "Habilitar personas", url: "https://twitter.com/" }
    ];

  })
