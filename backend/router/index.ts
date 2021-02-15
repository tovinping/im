import * as Router from 'koa-router'
const router = new Router()
export async function loadRouter(app: any) {
  import('../controller/User')
  app.use(router.routes())
}
export function Get(url: string) {
  return (target: any, name: string, descriptor: any) => {
    router['get'](url, async (ctx, next) => {
      await descriptor.value(ctx, next)
    })
  }
}
export function Post(url: string) {
  return (target: any, name: string, descriptor: any) => {
    router['post'](url, async (ctx, next) => {
      await descriptor.value(ctx, next)
    })
  }
}
