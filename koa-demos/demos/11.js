const Koa = require('koa');
const compose = require('koa-compose');
const app = new Koa();

const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  next();
  console.log('end')
}

const main = ctx => {
  console.log('main1')
  ctx.response.body = 'Hello World';
  console.log('main2')
};

const middlewares = compose([logger, main]);

app.use(middlewares);
app.listen(3000);
