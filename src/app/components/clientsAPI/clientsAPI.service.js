(function() {
  'use strict';

  angular
    .module('myClients')
    .factory('clientsAPI', clientsAPI);

  /** @ngInject */
  function clientsAPI($log, $http) {
    var baseURL = 'http://localhost:8080/api';
    return {
      getClients: function () {
        return $http.get(baseURL + '/clients');
      },
      AddClient: function (client) {
        return $http.post(baseURL + '/clients', client);
      }
    };
  }
})();
