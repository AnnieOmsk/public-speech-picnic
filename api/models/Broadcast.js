/**
 * Broadcast
 *
 * @module      :: Model
 * @description :: Broadcast for Picnic
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'broadcast',
  migrate: 'safe',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    time: 'datetime',
    journalistId: {
      type: 'integer',
      required: true,
      columnName: 'journalist_id'
    },
    likes: {
      type: 'integer',
      defaultsTo: 0
    },
    content: {
      type: 'text',
      required: true
    },
    accepted: 'boolean',
    lead: {
      type: 'string',
      required: true
    },
    title: {
        type: 'string',
        required: true
    },
    image: {
      type: 'string',
      required: false
    },
    preview: {
      type: 'string',
      required: false
    },
    directUrl: {
      type: 'string',
      required: true,
      columnName: 'direct_url'
    }
  }
};
