(function() {
  function AuthSrvcFunct($firebaseAuth) {
    var ref = new Firebase("https://bloc-chat-c0e87.firebaseio.com/");
    return $firebaseAuth(ref);
  }

  angular
    .module('auth')
    .factory('AuthService', ["$firebaseAuth", 'firebase', AuthSrvcFunct]);
})();