const angular = require('angular');
require('angular-google-maps');
require('angular-simple-logger');
require('lodash');

const sgvdtApp = angular.module('sgvdtApp', [require('angular-route'),
require('angular-ui-bootstrap'), require('angular-resource'), 'uiGmapgoogle-maps']);

require('./services')(sgvdtApp);
require('./offenses')(sgvdtApp);
require('./maps')(sgvdtApp);
require('./auth')(sgvdtApp);
require('./news')(sgvdtApp);
require('./twitter')(sgvdtApp);

sgvdtApp.config(['$routeProvider', function($rp) {
  $rp
  .when('/offenses', {
      templateUrl: 'templates/offenses/views/offense_view.html'
  })
  .when('/map', {
      templateUrl: 'templates/maps/views/map_view.html',
      controller: 'MapController',
      controllerAs: 'xxctrl'
  })
  .when('/signup', {
      templateUrl: 'templates/auth/views/auth_view.html',
      controller: 'SignUpController',
      controllerAs: 'authctrl'
  })
  .when('/signin', {
      templateUrl: 'templates/auth/views/auth_view.html',
      controller: 'SignInController',
      controllerAs: 'authctrl'
  })
  .when('/news', {
      templateUrl: 'templates/news/views/news_view.html',
      controller: 'NewsController',
      controllerAs: 'newsctrl'
  })
  .when('/twitter', {
    templateUrl: 'templates/twitter/views/twitter_view.html',
    controller: 'TwitterController',
    controllerAs: 'newsctrl'
  })
  .otherwise({
      redirectTo: '/map'
  });
}]);
