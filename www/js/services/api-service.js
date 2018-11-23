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

  });
