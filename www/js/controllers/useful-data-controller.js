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

    ];

    $scope.instructions = [

    ];

  })
