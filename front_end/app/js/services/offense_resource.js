var baseUrl = require('../../config').baseUrl;

module.exports = exports = function(app) {
  app.factory('offenseResource', function($resource) {
    var resource = $resource(baseUrl + '/api/offenses');
    resource.getDataList = function() {
      return this.query();
    };
    resource.getData = function(year) {
      return this.get({
        year: year
      });
    };
    return resource;
  });
};
