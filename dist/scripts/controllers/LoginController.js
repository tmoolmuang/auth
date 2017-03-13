(function() {
  function loginCtrlFunct($scope, $state, AuthService) {
    this.errorMessage = null;

    this.signin = function(email, password) {
      AuthService.signin(email, password);
      setTimeout(function () {
        $scope.$apply(function () {
          $scope.errorMessage = AuthService.errorMessage;
        });
      }, 2000);
    };

    this.test = function() {
      console.log(AuthService.user.email);
    }

    this.signup = function() {
      $state.go('register');
    };

    this.checkAuth = function() {
      AuthService.checkAuth();
    }
    this.signout = function() {
      AuthService.signout();
    }
  }

  angular
    .module('auth')
    .controller('LoginController', ['$scope', '$state', 'AuthService', loginCtrlFunct]);
})();