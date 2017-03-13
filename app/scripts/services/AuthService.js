(function() {
  function AuthSrvcFunct($state) {
    var AuthService = {};
    AuthService.errorMessage = null;
    AuthService.user = null;

    AuthService.signin = function(email, password) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(firebaseUser) {
          AuthService.user = firebaseUser;
          AuthService.errorMessage = null; //may not need
          $state.go('home');
          //console.log(firebaseUser);
        })
        .catch(function(error) {
          AuthService.errorMessage = error.message;
        });
    };

    AuthService.signup = function(email, password) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(firebaseUser) {
          AuthService.user = firebaseUser;
          AuthService.errorMessage = null; //may not need
          $state.go('home');
          console.log("User " + firebaseUser.uid + " created successfully!");
        })
        .catch(function(error) {
          console.error("Error: ", error);
          AuthService.errorMessage = error.message;
        });
    };

    AuthService.checkAuth = function() {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log(user.email);
        }
        else {
          console.log("checkAuth and user is signedout!");
        }
      });
    };

    AuthService.signout = function() {
      firebase.auth().signOut();
      $state.go('login');
    };

    return AuthService;
  }

  angular
    .module('auth')
    .factory('AuthService', ['$state', AuthSrvcFunct]);
})();