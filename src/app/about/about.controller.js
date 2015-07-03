(function() {
  'use strict';

  angular
    .module('gulptest')
    .controller('AboutController', AboutController);



var myApp = angular
    .module('gulptest');

myApp.service('nameService', function(){


    var self = this;
    this.name = 'John Doe';

    this.namelenght = function(){

      return self.name.length;

    };




});
  /** @ngInject */
  function AboutController($timeout, webDevTec, toastr, nameService, $scope, $log) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1435349626128;
    vm.showToastr = showToastr;

    activate();

    $scope.name = nameService.name;
    $scope.$watch('name', function(){

      nameService.name = $scope.name;
      
    });

    $log.log(nameService.name);
    $log.log(nameService.namelenght());


    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
