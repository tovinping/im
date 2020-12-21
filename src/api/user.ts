import {get} from '../utils/fetch'
import {ILoginReq, ILoginRes} from '../interface/login'
export function login(data: ILoginReq) {
  return get<ILoginRes>('/login', data)
}