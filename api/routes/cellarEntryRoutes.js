'use strict';
module.exports = function(app) {
   var cellarEntry = require('../controllers/cellarEntryController');

  // cellarEntry Routes
  app.route('/cellarEntries')
    .get(cellarEntry.list_all_cellarEntries)
    .post(cellarEntry.create_a_cellarEntry);


  app.route('/cellarEntries/:cellarEntryId')
    .get(cellarEntry.read_a_cellarEntry)
    .put(cellarEntry.update_a_cellarEntry)
    .delete(cellarEntry.delete_a_cellarEntry);
};