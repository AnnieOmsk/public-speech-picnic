/**
 * Timeline
 *
 * @module      :: Model
 * @description :: Timeline for Picnic
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'timeline',
  migrate: 'safe',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    title: 'string',
    organizerId: {
      columnName: 'organizer_id',
      type: 'integer'
    },
    start: 'datetime',
    end: 'datetime',
    zoneId: {
      columnName: 'zone_id',
      type: 'integer'
    }
  }
};
