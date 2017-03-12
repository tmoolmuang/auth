(function() {
  function homeCtrlFunct($scope, $state, AuthService) {
    this.errorMessage = null;
    this.signin = function(email, password) {
      var result = AuthService.signin(email, password);

      setTimeout(function () {
        $scope.$apply(function () {
          $scope.errorMessage = AuthService.errorMessage;
        });
      }, 1000);

      console.log(AuthService);
    };

    this.test = function() {
      console.log(AuthService.user);
    }

    this.signup = function() {
      $state.go('page2');
    };
  }

  angular
    .module('auth')
    .controller('HomeController', ['$scope', '$state', 'AuthService', homeCtrlFunct]);
})();