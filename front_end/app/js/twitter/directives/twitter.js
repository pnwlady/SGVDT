module.exports = function(app) {
  app.directive('twitter', function() {
    return {
      restrict: 'EAC',
      replace: true,
      require: '^ngController',
      transclude: true,
      templateUrl: '/templates/twitter/views/twitter_view.html',
      scope: {}
    };
  });
};
