application
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'ApplicationController'
      })

      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/home/index.html',
            controller: 'HomeController'
          }
        }
      })

      .state('app.emergencies', {
        url: '/emergencies',
        views: {
          'menuContent': {
            templateUrl: 'templates/emergencies/index.html',
            controller: 'EmergenciesController'
          }
        }
      })
      .state('app.emergency', {
        url: '/emergencies/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/emergencies/show.html',
            controller: 'EmergencyController'
          }
        }
      })
      
      .state('app.usefulData', {
        url: '/useful_data',
        views: {
          'menuContent': {
            templateUrl: 'templates/usefulData/index.html',
            controller: 'UsefulDataController'
          }
        }
      })

      .state('app.authorizations', {
        url: '/authorizations',
        views: {
          'menuContent': {
            templateUrl: 'templates/authorizations/index.html',
            controller: 'AuthorizationsController'
          }
        }
      })

      .state('app.authorized', {
        url: '/authorizations/:authorizedId',
        views: {
          'menuContent': {
            templateUrl: 'templates/authorizations/show.html',
            controller: 'AuthorizedController'
          }
        }
      })

      .state('app.reservations', {
        url: '/reservations',
        views: {
          'menuContent': {
            templateUrl: 'templates/reservations/index.html',
            controller: 'ReservationsController'
          }
        }
      })

      .state('app.reservation', {
        url: '/reservations/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/reservations/show.html',
            controller: 'ReservationController'
          }
        }
      })

      .state('app.events', {
        url: '/events',
        views: {
          'menuContent': {
            templateUrl: 'templates/events/index.html',
            controller: 'EventsController',
            resolve: {
                events: (Api) => {
                  return Api.getEvents();
                }
              }
          }
        }
      })
      .state('app.event', {
        url: '/events/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/events/show.html',
            controller: 'EventController',
            resolve: {
                event: (Api, $stateParams) => {
                  return Api.getEvent($stateParams.id);
                }
              }
          }
        }
      })

      .state('app.services', {
        url: '/services',
        views: {
          'menuContent': {
            templateUrl: 'templates/services/index.html',
            controller: 'ServicesController'
          }
        }
      })

      .state('app.service', {
        url: '/services/:serviceId',
        views: {
          'menuContent': {
            templateUrl: 'templates/services/show.html',
            controller: 'ServiceController'
          }
        }
      })

      .state('app.posts', {
        url: '/posts',
        views: {
          'menuContent': {
            templateUrl: 'templates/posts/index.html',
            controller: 'PostsController',
            resolve: {
                posts: (Api) => {
                  return Api.getPosts();
                }
              }
          }
        }
      })

      .state('app.post', {
        url: '/posts/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/posts/show.html',
            controller: 'PostController',
            resolve: {
                post: (Api, $stateParams) => {
                  return Api.getPost($stateParams.id);
                }
            }
          }
        }
      })

      .state('app.profile', {
        url: '/profile',
        views: {
          'menuContent': {
            templateUrl: 'templates/profile/index.html',
            controller: 'ProfileController'
          }
        }
      })


      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/home');

    });
