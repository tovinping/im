import {getUsers} from '../controller/user'
function test(ctx: any) {
  ctx.body = {name: 'test'}
}
interface IRouter {
  path: string
  method: 'get' | 'post'
  action(...args: any): any
}
export const AppRoutes: IRouter[] = [
  {
    path: '/posts',
    method: 'get',
    action: getUsers,
  },
  {
    path: '/posts/:id',
    method: 'get',
    action: test,
  },
  {
    path: '/posts',
    method: 'post',
    action: test,
  },
]
