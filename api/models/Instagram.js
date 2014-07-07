/**
 * Broadcast
 *
 * @module      :: Model
 * @description :: Instagram Blacklist entity
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'instagram',
  migrate: 'safe',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
      commentsCount: {
          columnName: 'comments_count',
          type: 'integer'
      },
      likesCount: {
          columnName: 'likes_count',
          type: 'integer'
      },
      mediaId: {
          columnName: 'media_id',
          type: 'string'
      },
      imageUrl: {
          columnName: 'image_url',
          type: 'string'
      },
      text: {
          columnName: 'text',
          type: 'string'
      },
      time: {
          columnName: 'time',
          type: 'string',
          required: true
      },
      url: {
          columnName: 'url',
          type: 'string',
          required: true
      },
      username: {
          columnName: 'username',
          type: 'string',
          required: true
      }
  }
};
