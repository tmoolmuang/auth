(function() {
  function homeCtrlFunct(AuthService) {
    this.email = AuthService.user.email;
    this.signout = function() {
      AuthService.signout();
    }
  }

  angular
    .module('auth')
    .controller('HomeController', ['AuthService', homeCtrlFunct]);
})();