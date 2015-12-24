(function() {
  'use strict';

  angular
    .module('myClients')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('addClient', {
        url: '/addClient',
        templateUrl: 'app/addClient/addClient.html',
        controller: 'AddClientController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
