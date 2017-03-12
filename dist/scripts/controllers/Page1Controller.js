(function() {
  function page1CtrlFunct() {
    this.test = "hello";
  }

  angular
    .module('auth')
    .controller('Page1Controller', [page1CtrlFunct]);
})();