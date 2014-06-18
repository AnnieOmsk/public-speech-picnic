/**
 * Organizer
 *
 * @module      :: Model
 * @description :: Organizer of timeline
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'organizer',
  migrate: 'safe',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    name: 'string'
  }
};
