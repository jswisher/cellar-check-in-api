'use strict';
module.exports = function(app) {
   var member = require('../controllers/memberController');

  // member Routes
  app.route('/members')
    .get(member.list_all_members)
    .post(member.create_a_member);


  app.route('/members/:memberId')
    .get(member.read_a_member)
    .put(member.update_a_member)
    .delete(member.delete_a_member);
};