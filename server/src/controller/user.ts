import { Context } from 'koa';

export const helloAction = (ctx: Context) => {
  ctx.body = 'Hello World';
};
