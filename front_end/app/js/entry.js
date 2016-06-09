const angular = require('angular');
require('angular-google-maps');
require('angular-simple-logger');
require('lodash');

const sgvdtApp = angular.module('sgvdtApp', [require('angular-route'),
require('angular-ui-bootstrap'), require('angular-resource'), 'uiGmapgoogle-maps']);

// const sgvdtApp = angular.module('sgvdtApp', [require('angular-route'),
// 'uiGmapgoogle-maps']);

require('./services')(sgvdtApp);
require('./offenses')(sgvdtApp);
require('./maps')(sgvdtApp);
require('./news')(sgvdtApp);
require('./auth')(sgvdtApp);
require('./services')(sgvdtApp);


sgvdtApp.config(['$routeProvider', function($rp) {
$rp
.when('/offenses', {
    templateUrl: 'templates/offenses/views/offense_view.html'
    // controller: 'OffenseController',
    // controllerAs: 'offensectrl'
})
.when('/map', {
    templateUrl: 'templates/maps/views/map_view.html',
    controller: 'MapController',
    controllerAs: 'xxctrl'
})
<<<<<<< HEAD
.when('/signup', {
    templateUrl: 'templates/auth/views/auth_view.html',
    controller: 'SignUpController',
    controllerAs: 'authctrl'
})
.when('/signin', {
    templateUrl: 'templates/auth/views/auth_view.html',
    controller: 'SignInController',
    controllerAs: 'authctrl'
=======
.when('/news', {
    templateUrl: 'templates/news/views/news_view.html',
    controller: 'NewsController',
    controllerAs: 'newsctrl'
})
.when('/twitter', {
  templateUrl: 'templates/twitter/views/twitter_view.html',
  controller: 'TwitterController',
  controllerAs: 'newsctrl'
>>>>>>> 048ba433be92923ede83ab9b7acb2d89c00f1f5f
})
.otherwise({
    redirectTo: '/map'
});
}]);


// sgvdtApp.config(function(uiGmapGoogleMapApiProvider) {
//    uiGmapGoogleMapApiProvider.configure({
//        //    key: 'your api key',
//        v: '3.20', // defaults to latest 3.X anyhow
//        libraries: 'weather,geometry,visualization'
//    });
// });
