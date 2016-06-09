// var baseUrl = require('../../config').baseUrl;

module.exports = function(app) {
app.factory('offenseResource', function($resource)
  {
    var resource = $resource('http://localhost:3000/api/offenses');
    resource.getDataList = function() {
        return this.query();
    };

    resource.getData = function(year) {
        return this.get({
            year: year
        }
        );};

    return resource;
});
};
