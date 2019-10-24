'use strict';

var mongoose = require('mongoose'),
  Style = mongoose.model('Styles');

exports.list_all_styles = function(req, res) {
  Style.find({}, function(err, style) {
    if (err)
      res.send(err);
    res.json(style);
  });
};

exports.create_a_style = function(req, res) {
  var new_style = new Style(req.body);
  new_style.save(function(err, style) {
    if (err)
      res.send(err);
    res.json(style);
  });
};

exports.read_a_style = function(req, res) {
  Style.findById(req.params.styleId, function(err, style) {
    if (err)
      res.send(err);
    res.json(style);
  });
};

exports.update_a_style = function(req, res) {
  Style.findOneAndUpdate({_id: req.params.styleId}, req.body, {new: true}, function(err, style) {
    if (err)
      res.send(err);
    res.json(style);
  });
};

exports.delete_a_style = function(req, res) {
  Style.remove({
    _id: req.params.styleId
  }, function(err, style) {
    if (err)
      res.send(err);
    res.json({ message: 'Style successfully deleted' });
  });
};