module.exports = function(app) {
  app.directive('newsListItem', function() {
    return {
      restrict: 'EAC',
      replace: true,
      templateUrl: '/templates/news/directives/news_list_item.html',
      scope: {
        article: '='
      }
    };
  });
};
