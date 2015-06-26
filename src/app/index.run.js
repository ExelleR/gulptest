(function() {
  'use strict';

  angular
    .module('gulptest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
