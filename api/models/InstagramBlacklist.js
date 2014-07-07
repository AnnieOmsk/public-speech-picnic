/**
 * Instagram Blacklist
 *
 * @module      :: Model
 * @description :: Instagram Blacklist entity
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'instagram_blacklist',
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
