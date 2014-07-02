/**
 * Broadcast
 *
 * @module      :: Model
 * @description :: Twitter Blacklist entity
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'twitter_blacklist',
  migrate: 'safe',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    messageId: {
        columnName: 'message_id',
        type: 'text',
        required: true
    }
  }
};
