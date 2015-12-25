(function() {
  'use strict';

  angular
    .module('myClients')
    .controller('AddClientController', AddClientController);

  /** @ngInject */
  function AddClientController($log, clientsAPI) {
    var vm = this;
    vm.saveClient = function(client) {
      $log.debug('Request to add a new Client');
      clientsAPI.AddClient(client).then(function(response) {
        vm.notificationMessage = response.status === 200 ? 'Client was added successfully!' : 'There was error adding the client!';
      });
    };
  }
})();
