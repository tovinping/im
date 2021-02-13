import { getUsers, addUser } from '../controller/user'
interface IRouter {
  path: string
  method: 'get' | 'post'
  action(...args: any): any
}
export const AppRoutes: IRouter[] = [
  {
    path: '/users',
    method: 'get',
    action: getUsers,
  },
  {
    path: '/user/add',
    method: 'get',
    action: addUser,
  },
]
