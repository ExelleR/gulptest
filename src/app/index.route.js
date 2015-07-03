(function() {
  'use strict';

  angular
    .module('gulptest')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        activetab: 'main'
      })
      .when('/about', {
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about',
        activetab: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
