application
  .controller('EventsController', function($scope, events) {
    $scope.events = [
      { id: 1, name: 'Vivi tu vocación',formatted_date: "04/09/2018 18.30hs", date: "04/09/2018", time:"19:30", image: "img/event.jpg"},
      { id: 2, name: 'Reunión de consorcio', description: "Reunión de consorcio anual para definir temas", formatted_date: "04/09/2018 18.30hs", date: "05/09/2018",time:"15:30", place: "Unidad funcional 2", image: "img/consorcio.jpg"},
      { id: 3, name: 'Torneo Basquet', description: "Torneo abierto de basquet. Inscripcion $1000", formatted_date: "04/09/2018 18.30hs", date: "05/09/2018",time:"13:00" ,place: "Cancha de Basquet - principal", image: "img/basket.jpg"},
      { id: 4, name: 'Torneo Futbol 11', description: "Torneo abierto de basquet. Inscripcion $20000", formatted_date: "04/09/2018 18.30hs", date: "07/09/2018",time:"18:30", place: "Cancha de futbol 11 - principal", image: "img/futbol.jpg"},
      { id: 5, name: 'Charla Adicciones', description: "Charla de adicciones brindada por Carlos Damin", formatted_date: "04/09/2018 18.30hs", date: "10/09/2018",time:"15:00" ,place: "Auditorio", image: "img/adicciones.jpg"},
      { id: 6, name: 'Torneo de Truco', description: "Torneo de truco", formatted_date: "04/09/2018 18.30hs", date: "11/09/2018", place: "Bar de Carlitos",time:"19:30" ,image: "img/truco.jpg"},
      { id: 7, name: 'Jornada Recreativa', description: "Jornada recreativa de padres e hijos", formatted_date: "04/09/2018 18.30hs", date: "12/09/2018",time:"14:30" ,place: "Parque central", image: "img/recreacion.jpg"}
    ];
    $scope.events = events;
  })
