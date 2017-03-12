(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
    $stateProvider
      .state('home', {
        url: '/',
        controller: "HomeController as home",
        templateUrl: '/templates/home.html'
      })
      .state('page1', {
        url: '/page1',
        controller: "Page1Controller as p1",
        templateUrl: '/templates/page1.html'
      })
     .state('page2', {
        url: '/page2',
        templateUrl: '/templates/page2.html'
      });
  }

  angular
    .module('auth', ['firebase', 'ui.router'])
    .config(config);
})();
