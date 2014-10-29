/*

http://api.jquery.com/
https://docs.angularjs.org/api/ng/function/angular.element
http://jsfiddle.net/hajpoj/JJQS9/15/
https://thinkster.io/angulartutorial/a-better-way-to-learn-angularjs/
https://docs.angularjs.org/

*/

//*****************************************************************************
// App

var bts = angular.module('bts', ['ngRoute', 'bts.controllers', 'bts.directives', 'bts.filters', 'bts.services','chieffancypants.loadingBar', 'ngAnimate', 'infinite-scroll']);

angular.module('infinite-scroll').value('THROTTLE_MILLISECONDS', 700);

bts.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true; 
    cfpLoadingBarProvider.includeBar = true;
  }]);

// https://docs.angularjs.org/api/ngRoute/provider/$routeProvider
// https://docs.angularjs.org/api/ng/service/$location
bts.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false);
    $routeProvider.when('/main', {
        templateUrl: 'main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
    });
    $routeProvider.otherwise({
        redirectTo: '/main'
    });
  }]);
