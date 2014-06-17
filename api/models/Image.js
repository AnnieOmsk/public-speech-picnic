/**
 * Image
 *
 * @module      :: Model
 * @description :: Images inside broadcast
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'image',
  migrate: 'safe',
  attributes: {
    filename: 'string',
    broadcastId: {
      type: 'integer',
      columnName: 'broadcast_id'
    }
  }
};
