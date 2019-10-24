//'use strict';

var mongoose = require('mongoose'),
  CellarEntry = mongoose.model('CellarEntries');

exports.list_all_cellarEntries = function(req, res) {
  CellarEntry.find({}, function(err, cellarEntry) {
    if (err)
      res.send(err);
    res.json(cellarEntry);
  });
};

exports.create_a_cellarEntry = function(req, res) {
  var new_cellarEntry = new CellarEntry(req.body);
  new_cellarEntry.save(function(err, cellarEntry) {
    if (err)
      res.send(err);
    res.json(cellarEntry);
  });
};

exports.read_a_cellarEntry = function(req, res) {
  CellarEntry.findById(req.params.cellarEntryId, function(err, cellarEntry) {
    if (err)
      res.send(err);
    res.json(cellarEntry);
  });
};

exports.update_a_cellarEntry = function(req, res) {
  CellarEntry.findOneAndUpdate({_id: req.params.cellarEntryId}, req.body, {new: true}, function(err, cellarEntry) {
    if (err)
      res.send(err);
    res.json(cellarEntry);
  });
};

exports.delete_a_cellarEntry = function(req, res) {
  CellarEntry.remove({
    _id: req.params.cellarEntryId
  }, function(err, cellarEntry) {
    if (err)
      res.send(err);
    res.json({ message: 'CellarEntry successfully deleted' });
  });
};