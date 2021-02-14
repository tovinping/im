import * as Router from 'koa-router'
const router = new Router()
export async function loadRouter(app) {
  import('../controller/user')
  app.use(router.routes())
}
export function Get(url: string) {
  return (target, name, descriptor) => {
    router['get'](url, async (ctx, next) => {
      await descriptor.value(ctx, next)
    })
  }
}
export function Post(url: string) {
  return (target, name, descriptor) => {
    router['post'](url, async (ctx, next) => {
      await descriptor.value(ctx, next)
    })
  }
}
