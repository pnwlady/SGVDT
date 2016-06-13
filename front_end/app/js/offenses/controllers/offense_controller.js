module.exports = function(app) {
  app.controller('OffenseController', ['$scope', 'offenseResource', function( $scope, Resource) {

    $scope.offenseArr = [];
    console.log($scope.offenseArr);
    $scope.getDataList = function() {
    $scope.offenseArr = Resource.getDataList();
    };

    $scope.setCurrentData = function(year) {
      Resource.getIssue({
          year: year
      }, (data) => {
          $scope.offenseArr = data;
      });
    };
    $scope.getDataList();
  }]);
};
