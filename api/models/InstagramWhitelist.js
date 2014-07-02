/**
 * Broadcast
 *
 * @module      :: Model
 * @description :: Instagram Whitelist entity
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'instagram_whitelist',
  migrate: 'safe',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    mediaUrl: {
        columnName: 'media_url',
        type: 'text',
        required: true
    }
  }
};
