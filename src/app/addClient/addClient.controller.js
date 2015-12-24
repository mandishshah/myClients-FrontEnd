(function() {
  'use strict';

  angular
    .module('myClients')
    .controller('AddClientController', AddClientController);

  /** @ngInject */
  function AddClientController($log, clientsAPI) {
    var vm = this;
    vm.saveClient = function (client) {
      $log.debug('Request to add a new Client');
      clientsAPI.AddClient(client).then(function (response) {
        console.log(response);
      });
    };
  }
})();
