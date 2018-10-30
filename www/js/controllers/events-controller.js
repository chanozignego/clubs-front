angular
  .module('clubs-front')
  .controller('EventsController', function($scope) {
    $scope.events = [
      { id: 1, title: 'Vivi tu vocación y transforma la realidad',date: "04/09/2018", time:"19:30"},
      { id: 2, title: 'Reunión de consorcio', description: "Reunión de consorcio anual para definir temas", date: "05/09/2018", place: "Unidad funcional 2"},
      { id: 3, title: 'Torneo Basquet', description: "Torneo abierto de basquet. Inscripcion $1000", date: "05/09/2018", place: "Cancha de Basquet - principal"},
      { id: 4, title: 'Torneo Futbol 11', description: "Torneo abierto de basquet. Inscripcion $20000", date: "07/09/2018", place: "Cancha de futbol 11 - principal"},
      { id: 5, title: 'Charla Adicciones', description: "Charla de adicciones brindada por Carlos Damin", date: "10/09/2018", place: "Auditorio"},
      { id: 6, title: 'Torneo de Truco', description: "Torneo de truco", date: "11/09/2018", place: "Bar de Carlitos"},
      { id: 7, title: 'Jornada Recreativa', description: "Jornada recreativa de padres e hijos", date: "12/09/2018", place: "Parque central"}
    ];
  })
