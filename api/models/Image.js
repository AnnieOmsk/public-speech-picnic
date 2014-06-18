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
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    url: 'string',
    previewUrl: {
      type: 'string',
      columnName: 'preview_url'
    },
    broadcastId: {
      type: 'integer',
      columnName: 'broadcast_id'
    }
  }
};
