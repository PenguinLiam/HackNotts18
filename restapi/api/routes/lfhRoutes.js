'use strict';
module.exports = function(app) {
  var lfh = require('../controllers/lfhController');

  // todoList Routes
  app.route('/users')
    .get(lfh.list_all_users)
    .post(lfh.create_a_user);


  app.route('/user/:userId')
    .get(lfh.read_a_user)
    .put(lfh.update_a_user)
    .delete(lfh.delete_a_user);
    
  app.route('/groups')
    .get(lfh.list_all_groups)
    .post(lfh.create_a_group);


  app.route('/group/:groupId')
    .get(lfh.read_a_group)
    .put(lfh.update_a_group)
    .delete(lfh.delete_a_group);
};