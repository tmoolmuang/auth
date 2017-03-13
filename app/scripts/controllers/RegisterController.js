(function() {
  function regCtrlFunct($scope, AuthService) {
    this.errorMessage = null;
    this.signup = function(email, password) {
      AuthService.signup(email, password);
      setTimeout(function () {
        $scope.$apply(function () {
          $scope.errorMessage = AuthService.errorMessage;
        });
      }, 2000);
    };

    this.checkAuth = AuthService.checkAuth;
    this.cancel = function() {
      AuthService.signout();
    }
  }

  angular
    .module('auth')
    .controller('RegisterController', ['$scope', 'AuthService', regCtrlFunct]);
})();