var angular = require('angular');

describe('SignUp Test', () => {
  var $httpBackend;
  var $controller;
  var signUpController;

  beforeEach(angular.mock.module('sgvdtApp'));

  beforeEach(angular.mock.inject((_$controller_) => {
    $controller = _$controller_;
  }));

  beforeEach(angular.mock.inject((_$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    signUpController = $controller('SignUpController');
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should be a controller', () => {
    expect(typeof signUpController).toBe('object');
    expect(typeof signUpController.authenticate).toBe('function');
  });

  it('It should sign up a user', () => {
    $httpBackend.expectGET('api/signup')
    .respond(200, { token: 'testResponse' });
    signUpController.user = { username: '', password: '' };
    signUpController.user.password = 'TestPassword123';
    signUpController.user.username = 'TestUser';
    signUpController.authenticate(signUpController.user);
    $httpBackend.flush();
    expect(window.localStorage.token).toBe('testResponse');
  });
});
