var angular = require('angular');

describe('sgvHandleError service', () => {
  beforeEach(angular.mock.module('sgvdtApp'));

  it('should return a function', angular.mock.inject( (sgvHandleError) => {
    expect(typeof sgvHandleError).toBe('function');
  }));

  it('should add an error to the errors array', angular.mock.inject( (sgvHandleError) => {
    var testArr = [];
    sgvHandleError(testArr, 'test message')();
    expect(testArr.length).toBe(1);
    expect(testArr[0] instanceof Error).toBe(true);
    expect(testArr[0].message).toBe('test message');
  }));
});
