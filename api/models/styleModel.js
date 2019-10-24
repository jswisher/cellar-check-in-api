'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StyleSchema = new Schema({
  categoryId: {
    type: String,
    required: 'Kindly enter the categoryId'
  },
  category: {
    type: String,
    required: 'Kindly enter the category'
  },
  styleId: {
    type: String,
    required: 'Kindly enter the styleId'
  },
  style: {
    type: String,
    required: 'Kindly enter the style',
    unique: true
  },
  minAbv: {
    type: Number,
    required: 'Kindly enter the minAbv'
  },
  maxAbv: {
    type: Number,
    required: 'Kindly enter the maxAbv'
  },
  minIbu: {
    type: Number,
    required: 'Kindly enter the minIbu'
  },
  maxIbu: {
    type: Number,
    required: 'Kindly enter the maxIbu'
  },
  minSrm: {
    type: Number,
    required: 'Kindly enter the minSrm'
  },
  maxSrm: {
    type: Number,
    required: 'Kindly enter the maxSrm'
  },
  minOg: {
    type: Number,
    required: 'Kindly enter the minOg'
  },
  maxOg: {
    type: Number,
    required: 'Kindly enter the maxOg'
  },
  minFg: {
    type: Number,
    required: 'Kindly enter the minFg'
  },
  maxFg: {
    type: Number,
    required: 'Kindly enter the maxFg'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

StyleSchema.index({categoryId: 1, styleId: 1}, {unique: true});
StyleSchema.index({style: 1}, {unique: true});

module.exports = mongoose.model('Styles', StyleSchema);