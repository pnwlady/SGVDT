const angular = require('angular');
const angmaps = require('angular-google-maps');
const logger = require('angular-simple-logger');
const lodash = require('lodash');

const sgvdtApp = angular.module('sgvdtApp', [require('angular-route'),
require('angular-ui-bootstrap'), 'uiGmapgoogle-maps']);

// const sgvdtApp = angular.module('sgvdtApp', [require('angular-route'),
// 'uiGmapgoogle-maps']);

require('./services')(sgvdtApp);
require('./offenses')(sgvdtApp);
require('./maps')(sgvdtApp);
require('./news')(sgvdtApp);
require('./auth')(sgvdtApp);


sgvdtApp.config(['$routeProvider', function($rp) {
$rp
.when('/offenses', {
    templateUrl: 'templates/offenses/views/offense_view.html',
    controller: 'OffenseController',
    controllerAs: 'offensectrl'
})
.when('/map', {
    templateUrl: 'templates/maps/views/map_view.html',
    controller: 'MapController',
    controllerAs: 'xxctrl'
})
.when('signup', {
    templateUrl: 'templates/auth/views/signup_view.html',
    controller: 'signupController',
    controllerAs: 'signupctrl'
})
.when('signin', {
    templateUrl: 'templates/auth/views/signin_view.html',
    controller: 'signinController',
    controllerAs: 'signinctrl'
})
.otherwise({
    redirectTo: '/offenses'
});
}]);


// sgvdtApp.config(function(uiGmapGoogleMapApiProvider) {
//    uiGmapGoogleMapApiProvider.configure({
//        //    key: 'your api key',
//        v: '3.20', // defaults to latest 3.X anyhow
//        libraries: 'weather,geometry,visualization'
//    });
// });
