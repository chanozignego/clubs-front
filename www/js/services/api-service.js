application
  .service('Api', function($http) { //CONFIG

    //const API = `${CONFIG.clubs.api_url}`;
    // const API = "http://192.168.0.19:3000/api/v1"
    const API = "http://192.168.0.29:3000/api/v1"
    // const API = "http://clubs.simpit.co/api/v1"

    this.getPosts = () => {
      return $http
        .get(`${API}/posts`)
        .then((res) => res.data);
    };

    this.getPost = (id) => {
      return $http
        .get(`${API}/posts/${id}`)
        .then((res) => res.data);
    };

    this.getEvents = () => {
      return $http
        .get(`${API}/events`)
        .then((res) => res.data);
    };

    this.getEvent = (id) => {
      return $http
        .get(`${API}/events/${id}`)
        .then((res) => res.data);
    };

    this.getAuthorizeds = () => {
      return $http
        .get(`${API}/authorizeds`)
        .then((res) => res.data);
    };

    this.getAuthorized = (id) => {
      return $http
        .get(`${API}/authorizeds/${id}`)
        .then((res) => res.data);
    };

    this.createAuthorized = (authorized) => {
      return $http
        .post(`${API}/authorizeds`, authorized)
        .then((res) => res.data);
    };

    this.deleteAuthorized = (id) => {
      return $http
        .delete(`${API}/authorizeds/${id}`)
        .then((res) => res.data);
    };


    // this.getPermittedPlaces = () => {
    //   return $http
    //     .get(`${API}/settings/places`)
    //     .then((res) => res.data)
    //     .catch(() => ["Buenos Aires","CABA","Capital Federal","Ciudad Autónoma de Buenos Aires","Comuna 1","Comuna 2","Comuna 3","Comuna 4","Comuna 5","Comuna 6","Comuna 7","Comuna 8","Comuna 9","Comuna 10","Comuna 11","Comuna 12","Comuna 13","Comuna 14","Comuna 15","Vicente López","Olivos","Martínez","San Isidro"]);
    // };

    // this.getUserMessages = (id, page) => {
    //   return $http
    //     .get(`${API}/users/${id}/messages`, {params: {page: page}})
    //     .then((res) => res.data)
    //     .catch(() => []);
    // };

    // this.readMessage = (id) => {
    //   return $http
    //     .put(`${API}/messages/${id}/read`)
    //     .then((res) => res.data);
    // };

    // this.getCurrentShipment = (userId) => {
    //   return this.getUserShipments(userId, 1)
    //     .then((data) => this.getCurrentUserShipment(data));
    // };

    // this.sendShipment = (shipment) => {
    //   return $http
    //     .post(`${API}/shipments`, shipment)
    //     .then((res) => res.data);
    // };


  });
