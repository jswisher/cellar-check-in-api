'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SessionSchema = new Schema({
  sessionDate: {
    type: Date,
    required: 'Kindly enter the date of the session',
    unique: true
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Sessions', SessionSchema);