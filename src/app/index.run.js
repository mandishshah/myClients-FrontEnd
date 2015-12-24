(function() {
  'use strict';

  angular
    .module('myClients')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
