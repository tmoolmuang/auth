(function() {
  function AuthSrvcFunct() {
    var AuthService = {};
    AuthService.errorMessage = null;
    AuthService.user = null;

    AuthService.signin = function(email, password) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(firebaseUser) {
          AuthService.user = firebaseUser;
          //console.log(firebaseUser);
        })
        .catch(function(error) {
          AuthService.errorMessage = error.message;
        });
    };

    return AuthService;
  }

  angular
    .module('auth')
    .factory('AuthService', [AuthSrvcFunct]);
})();