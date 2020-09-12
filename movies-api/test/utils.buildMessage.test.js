const assert = require('assert');
const builMessage = require('../utils/buildMessage');

describe.only('Utils - buildMessage', function() {
  describe('When receives an entity and an action', function() {
    it('Should return the respective message', function() {
      const result = builMessage('movie', 'create');
      const expect = 'movie created';
      assert.strictEqual(result, expect);
    });

    describe('When receives an entity and an action and is a list', function() {
      it('Should return the respective message with the entity in plural', function() {
        const result = builMessage('movie', 'list');
        const expected = 'movies listed';
        assert.strictEqual(result, expected);
      });
    });
  });
});
