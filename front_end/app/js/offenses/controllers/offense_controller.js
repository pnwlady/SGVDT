
module.exports = function(app) {
  app.controller('OffenseController', ['$scope', 'offenseResource',
   function( $scope, Resource) {

    $scope.offenseArr = [];
    console.log($scope.offenseArr);
    $scope.getDataList = function() {
    $scope.offenseArr = Resource.getDataList();
    };

    $scope.setCurrentData = function(year) {

        Resource.getIssue({
            year: year
        }, function(data) {
            $scope.offenseArr = data;

        });
    };

    $scope.getDataList();

  }]);

};


// module.exports = function(app) {
//   app.controller('OffenseController', ['sgvdtResource', function(Resource) {
//     this.offenses = [];
//     this.errors = [];
//     var remote = new Resource(this.offenses, this.errors, baseUrl + '/api/offenses', { errMessages: { getAll: 'custome error message' } });
//     this.getAll = remote.getAll.bind(remote);
//     this.getAll();
//   }]);
// };
