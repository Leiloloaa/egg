'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/index', controller.home.index);
  router.get('/home', controller.home.home);
  router.get('/lei', controller.leiloloaa.lei);
  router.get('/getGirls', controller.leiloloaa.getGirls);
};
