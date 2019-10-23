'use strict';
module.exports = function(app) {
  var session = require('../controllers/sessionController');

  // session Routes
  app.route('/sessions')
    .get(session.list_all_sessions)
    .post(session.create_a_session);


  app.route('/sessions/:sessionId')
    .get(session.read_a_session)
    .put(session.update_a_session)
    .delete(session.delete_a_session);
};