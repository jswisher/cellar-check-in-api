//'use strict';
var mongoose = require('mongoose');
var session = require('../models/sessionModel');
var member = require('../models/memberModel');
var style = require('../models/styleModel');
var Schema = mongoose.Schema;


var CellarEntrySchema = new Schema({
  session: {
    type: session.schema,
    ref: 'Sessions',
    required: 'Kindly enter the session'
  },member: {
    type: member.schema,
    ref: 'Members',
    required: 'Kindly enter the member'
  },style: {
    type: style.schema,
    ref: 'Styles',
    required: 'Kindly enter the style'
  },beerName: {
    type: String,
    required: 'Kindly enter the beerName'
  },preferredSample: {
    type: Boolean,
    required: 'Kindly enter the preferredSample'
  },bottleConditioned: {
    type: Boolean,
    required: 'Kindly enter the bottleConditioned'
  },og: {
    type: Number,
    required: 'Kindly enter the og'
  },fg: {
    type: Number,
    required: 'Kindly enter the fg'
  },abv: {
    type: Number,
    required: 'Kindly enter the abv'
  },ibu: {
    type: Number,
    required: 'Kindly enter the ibu'
  },specialIngredients: {
    type: String
  },timeEntered: {
    type: Date,
    required: 'Kindly enter the timeEntered',
    default: Date.now()
  },checkInTime: {
    type: Date
  },serveOrder: {
    type: Number
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('CellarEntries', CellarEntrySchema);