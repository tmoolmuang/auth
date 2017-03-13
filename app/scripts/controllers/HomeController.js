(function() {
  function homeCtrlFunct(AuthService) {
    this.test = AuthService.user.email;
    this.signout = function() {
      AuthService.signout();
    }
  }

  angular
    .module('auth')
    .controller('HomeController', ['AuthService', homeCtrlFunct]);
})();