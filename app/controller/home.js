'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = '<h1>hello, word</h1>';
    }

    // Egg.js全部使用异步模式 async
    async home() {
        const { ctx } = this;
        ctx.body = {
            status: 200,
            data: ctx.request.body
        };
    }
}

module.exports = HomeController;