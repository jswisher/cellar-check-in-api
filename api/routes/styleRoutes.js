'use strict';
module.exports = function(app) {
   var style = require('../controllers/styleController');

  // style Routes
  app.route('/styles')
    .get(style.list_all_styles)
    .post(style.create_a_style);


  app.route('/styles/:styleId')
    .get(style.read_a_style)
    .put(style.update_a_style)
    .delete(style.delete_a_style);
};