module.exports = function(app) {
  app.directive('d3Bubble', function() {
    return {
      restrict: 'EAC',
      replace: true,
      require: '^ngController',
      transclude: true,
      templateUrl: '/templates/charts/views/bubble_view.html',
      scope: {
          map: '='
      },

      // link: function(scope, element, attrs, controller) {
      //   scope.remove = controller.removeMug;
      // }
    };
  });
};
