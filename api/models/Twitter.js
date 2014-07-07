/**
 * Twitter
 *
 * @module      :: Model
 * @description :: Twitter entity
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'twitter',
  migrate: 'safe',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
      createdAt: {
          columnName: 'created_at',
          type: 'string',
          required: true
      },
      favoriteUrl: {
          columnName: 'favorite_url',
          type: 'string',
          required: true
      },
      replyUrl: {
          columnName: 'reply_url',
          type: 'string',
          required: true
      },
      retweetUrl: {
          columnName: 'retweet_url',
          type: 'string',
          required: true
      },
      favoritesCount: {
          columnName: 'favorites_count',
          type: 'integer',
          required: true
      },
      retweetsCount: {
          columnName: 'retweets_count',
          type: 'integer',
          required: true
      },
      tweetId: {
          columnName: 'tweet_id',
          type: 'string',
          required: true
      },
      text: {
          columnName: 'text',
          type: 'string',
          required: true
      },
      url: {
          columnName: 'url',
          type: 'string',
          required: true
      },
      userAccount: {
          columnName: 'user_account',
          type: 'string',
          required: true
      },
      userIcon: {
          columnName: 'user_icon',
          type: 'string',
          required: true
      },
      userName: {
          columnName: 'user_name',
          type: 'string',
          required: true
      }
  }
};
