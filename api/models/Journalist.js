/**
 * Journalist
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'journalist',
  migrate: 'safe',
  attributes: {
    firstName: {
      columnName: 'first_name',
      type: 'string'
    },
    lastName: {
      columnName: 'last_name',
      type: 'string'
    },
    login: 'string',
    password: 'string'
  }
};
