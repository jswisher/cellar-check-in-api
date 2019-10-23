'use strict';


var mongoose = require('mongoose'),
  Session = mongoose.model('Sessions');

exports.list_all_sessions = function(req, res) {
  Session.find({}, function(err, session) {
    if (err)
      res.send(err);
    res.json(session);
  });
};




exports.create_a_session = function(req, res) {
  var new_session = new Session(req.body);
  new_session.save(function(err, session) {
    if (err)
      res.send(err);
    res.json(session);
  });
};


exports.read_a_session = function(req, res) {
  Session.findById(req.params.sessionId, function(err, session) {
    if (err)
      res.send(err);
    res.json(session);
  });
};


exports.update_a_session = function(req, res) {
  Session.findOneAndUpdate({_id: req.params.sessionId}, req.body, {new: true}, function(err, session) {
    if (err)
      res.send(err);
    res.json(session);
  });
};


exports.delete_a_session = function(req, res) {
  Session.remove({
    _id: req.params.sessionId
  }, function(err, session) {
    if (err)
      res.send(err);
    res.json({ message: 'Session successfully deleted' });
  });
};