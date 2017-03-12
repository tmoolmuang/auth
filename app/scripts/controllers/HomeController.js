(function() {
  function homeCtrlFunct($scope, $state) {

    this.login = function(email, password) {
      // console.log(email);
      // console.log(password);

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(firebaseUser) {
          $state.go('page1');
        })
        .catch(function(error) {
          $scope.$apply(function() {
           $scope.errorMessage = error.message;
          });
        });
    };

    this.signup = function() {
      $state.go('page2');
    };
  }

  angular
    .module('auth')
    .controller('HomeController', ['$scope', '$state', homeCtrlFunct]);
})();