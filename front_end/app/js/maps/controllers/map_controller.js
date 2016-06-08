const angular = require('angular');
const angmaps = require('angular-google-maps');
const lodash = require('lodash');

var baseUrl = require('../../config').baseUrl;


module.exports = function(app) {
  app.controller('MapController', ['sgvdtResource', '$http', '$scope', function( Resource, $http, $scope) {

      $scope.map = { center: {
           latitude: 47.618217, longitude: -122.351832
       }, zoom: 12,
   bounds: {} };

    $scope.options = {
         scrollwheel: false
     };


var latitude = [];
var longitude = [];

 var createMarker = function(i, bounds, idKey) {

     var lat_min = bounds.southwest.latitude,
        lat_range = bounds.northeast.latitude - lat_min,
        lng_min = bounds.southwest.longitude,
        lng_range = bounds.northeast.longitude - lng_min;

     if (idKey == null) {
         idKey = 'id';
     }


    var ret = {
                 latitude: latitude[i],
                 longitude: longitude[i],
                 title: 'm' + i
             };

        ret[idKey] = i;
         return ret;
     };

$scope.randomMarkers = [];

     $scope.$watch(
         function() {
         return $scope.map.bounds;
     }, function(nv, ov) {
         if (!ov.southwest && nv.southwest) {
             var markers = [];

             $http.get(baseUrl + '/api/offenses')
             .then((res) => {
                 $http.get(baseUrl + '/api/offenses')
                 .then((res) => {
                    // latitude.push(res.data[i].latitude);
                    // longitude.push(res.data[i].longitude);

             for (var i = 0; i <= res.data.length; i++) {
                 latitude.push(res.data[i].latitude);
                 longitude.push(res.data[i].longitude);
                 markers.push(createMarker(i, $scope.map.bounds));
             }
                 });
              });
             $scope.randomMarkers = markers;
            //  console.log(markers);
            //  console.log(markers.length);

         }
     }, true);

  }]);
};
