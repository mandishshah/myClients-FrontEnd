(function() {
  'use strict';

  angular
    .module('myClients')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(clientsAPI) {
    var vm = this;

    clientsAPI.getClients().then(function(response) {
      vm.clients = response.data;
    });
  }
})();
