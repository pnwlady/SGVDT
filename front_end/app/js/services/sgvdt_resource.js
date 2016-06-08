module.exports = function(app) {
  app.factory('sgvdtResource', ['$http', 'handleError', function($http, handleError) {
    var Resource = function(resourceArr, errorsArr, baseUrl, options) {
      this.data = resourceArr;
    //   console.log(resourceArr);
      this.url = baseUrl;
      this.errors = errorsArr;
      this.options = options || {};
      this.options.errMessages = this.options.errMessages || {};
    };

    Resource.prototype.getAll = function() {
      return $http.get(this.url)
        .then((res) => {
            // console.log(data);
            // console.log(res.data[0].summary);
          this.data.splice(0);
          for (var i = 0; i < res.data.length; i++) {
            this.data.push(res.data[i]);
        }

        // console.log(this.data);
        }, handleError(this.errors, this.options.errMessages.getAll || 'could not fetch resource'));

    };
    return Resource;
}]);
};
