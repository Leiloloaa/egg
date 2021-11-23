'use strict';

const Controller = require('egg').Controller;

class LeiloloaaController extends Controller {
  async lei() {
    const { ctx } = this;
    ctx.body = '我就是我';
  }

  // 异步，一开始找不到，要等到 5s 后才会返回
  async getGirls() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve((ctx.body = '<h1>123456</h1>'));
      }, 5000);
    });
  }
}

module.exports = LeiloloaaController;
