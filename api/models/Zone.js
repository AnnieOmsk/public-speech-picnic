/**
 * Zone
 *
 * @module      :: Model
 * @description :: Zone for timeline
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'zone',
  migrate: 'safe',
  attributes: {
    name: 'string'
  }
};
