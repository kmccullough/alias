/* jshint node: true */
'use strict';

/**
 * Gives map of aliases to actualized values
 * @param {Object.<string,string[]>} aliasArrays Known aliases for given values
 * @return {Object.<string,string>}
 */
function aliases(aliasArrays) {
  const aliasMap = {};
  Object.keys(aliasArrays || {}).forEach(actualized =>
    [].concat(aliasArrays[actualized] || [])
      .forEach(alias => aliasMap[alias] = actualized)
  );
  return aliasMap;
}

/**
 * @typedef AliasArrays
 * @type Object.<string,string|string[]>
 */
/**
 * Gives actualized value from alias or returns given alias.
 * A single argument `aliasArray` may be used to return a curried function.
 * @example alias('prod', { production: ['prod'] }) // Returns 'production'
 * @example alias({ production: ['prod'] })('prod') // Returns 'production'
 * @param {string|AliasArrays} aliasValue Alias for some value
 * @param {AliasArrays} [aliasArrays] Known aliases for given values
 * @return {string|function}
 */
function alias(aliasValue, aliasArrays = null) {
  if (arguments.length < 2) {
    aliasArrays = arguments[0];
  }
  const aliasMap = aliases(aliasArrays);
  const alias = alias => alias in aliasMap ? aliasMap[alias] : alias
  return arguments.length < 2 ? alias : alias(aliasValue);
}

alias.alias = alias;
alias.aliases = aliases;

module.exports = alias;
