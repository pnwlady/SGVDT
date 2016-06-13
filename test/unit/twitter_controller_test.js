/* eslint-env karma */
const angular = require('angular');
require('angular-mocks');

describe('twitter Controller', () => {
  var $controller;

  beforeEach(angular.mock.module('sgvdtApp'));
  beforeEach(angular.mock.inject( (_$controller_) => {
    $controller = _$controller_;
  }));

  describe('twitter api functions', () => {
    var twitterctrl;

    beforeEach(angular.mock.inject( () => {
      twitterctrl = $controller('TwitterController');
    }));

    it('the spdTwitter function should call the twitter api', () => {
      expect(typeof twitterctrl.spdTwitter).toEqual('function');
    });
    it('the keywordTwitter function should call the twitter api', () => {
      expect(typeof twitterctrl.keywordTwitter).toEqual('function');
    });
  });
});
