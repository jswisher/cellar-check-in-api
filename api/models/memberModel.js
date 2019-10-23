'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MemberSchema = new Schema({
  email: {
    type: String,
    required: 'Kindly enter the email of the member',
    unique: true
  },
  firstName: {
    type: String,
    required: 'Kindly enter the first name of the member'
  },
  lastName: {
    type: String,
    required: 'Kindly enter the last name of the member'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Members', MemberSchema);