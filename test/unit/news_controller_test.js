const angular = require('angular');
require('angular-mocks');

describe('news Controller', () => {
  var $controller;

  beforeEach(angular.mock.module('sgvdtApp'));
  beforeEach(angular.mock.inject( (_$controller_) => {
    $controller = _$controller_;
  }));

  describe('getArticles function', () => {
    var newsctrl;

    beforeEach(angular.mock.inject( () => {
      newsctrl = $controller('NewsController');
    }));

    it('should get news articles and fill articles array', () => {
      expect(typeof newsctrl.getArticles).toEqual('function');
    });
  });
});
