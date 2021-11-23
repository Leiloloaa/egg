'use strict';

const { app } = require('egg-mock/bootstrap');

describe('lei test', () => {
  it('index', () => {
    return app
      .httpRequest()
      .get('/index')
      .expect(200)
      .expect('<h1>hello, word</h1>');
  });

  // it('getGirls', async () => {
  //   await app
  //     .httpRequest()
  //     .get('/getGirls')
  //     .expect(200)
  //     .expect('<h1>123456</h1>');
  // });
});
