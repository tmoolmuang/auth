(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
    $stateProvider
      .state('login', {
        url: '/',
        controller: "LoginController as login",
        templateUrl: '/templates/login.html'
      })
      .state('home', {
        url: '/home',
        controller: "HomeController as home",
        templateUrl: '/templates/home.html'
      })
      .state('register', {
        url: '/register',
        controller: "RegisterController as reg",
        templateUrl: '/templates/register.html'
      });
  }

  angular
    .module('auth', ['firebase', 'ui.router'])
    .config(config);
})();
