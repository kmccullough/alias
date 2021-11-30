const alias = require('./index');
const { aliases } = alias;

const assert = require('assert');

describe('Unit | alias', function() {
  it('should be default and named export', function() {
    assert.ok(alias);
    assert.strictEqual(alias, alias.alias);
  });

  it('should provide actualized value for alias', function() {
    const aliasArrays = { production: 'prod',  test: [ 'dev', 'uat' ] };
    assert.strictEqual(alias('prod', aliasArrays), 'production');
    assert.strictEqual(alias('dev', aliasArrays), 'test');
    assert.strictEqual(alias('uat', aliasArrays), 'test');
  });

  it('should provide curried function to provide actualized value for alias', function() {
    const getAlias = alias({ production: 'prod',  test: [ 'dev', 'uat' ] });
    assert.strictEqual(getAlias('prod'), 'production');
    assert.strictEqual(getAlias('dev'), 'test');
    assert.strictEqual(getAlias('uat'), 'test');
  });
});

describe('Unit | aliases', function() {
  it('should map aliases to actualized values', function() {
    const aliasMap = aliases({ production: 'prod',  test: [ 'dev', 'uat' ] });
    assert.deepEqual(aliasMap, {
      prod: 'production',
      dev: 'test',
      uat: 'test',
    });
  });
});
