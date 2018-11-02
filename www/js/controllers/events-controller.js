angular
  .module('clubs-front')
  .controller('EventsController', function($scope) {
    $scope.events = [
      { id: 1, title: 'Vivi tu vocación',date: "04/09/2018", time:"19:30", img: "img/event.jpg"},
      { id: 2, title: 'Reunión de consorcio', description: "Reunión de consorcio anual para definir temas", date: "05/09/2018",time:"15:30", place: "Unidad funcional 2", img: "img/consorcio.jpg"},
      { id: 3, title: 'Torneo Basquet', description: "Torneo abierto de basquet. Inscripcion $1000", date: "05/09/2018",time:"13:00" ,place: "Cancha de Basquet - principal", img: "img/basket.jpg"},
      { id: 4, title: 'Torneo Futbol 11', description: "Torneo abierto de basquet. Inscripcion $20000", date: "07/09/2018",time:"18:30", place: "Cancha de futbol 11 - principal", img: "img/futbol.jpg"},
      { id: 5, title: 'Charla Adicciones', description: "Charla de adicciones brindada por Carlos Damin", date: "10/09/2018",time:"15:00" ,place: "Auditorio", img: "img/adicciones.jpg"},
      { id: 6, title: 'Torneo de Truco', description: "Torneo de truco", date: "11/09/2018", place: "Bar de Carlitos",time:"19:30" ,img: "img/truco.jpg"},
      { id: 7, title: 'Jornada Recreativa', description: "Jornada recreativa de padres e hijos", date: "12/09/2018",time:"14:30" ,place: "Parque central", img: "img/recreacion.jpg"}
    ];
  })
