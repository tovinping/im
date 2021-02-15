import { Context, Next } from 'koa'
export default async function response(ctx: Context, next: Next) {
  ctx.success = (data = null, msg = 'ok', code = 200,) => {
    ctx.body = {
      code,
      data,
      msg
    };
  };

  ctx.error = (msg = '', code = 100, data = null) => {
    ctx.body = {
      code,
      data,
      msg
    };
  };
  await next()
}