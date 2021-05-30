import { login } from 'src/api'
import { IUser } from 'src/interface'
import clientSocket from './clientSocket'
import { queryContactList } from 'src/utils'
interface IDoLogin {
  account: string
  password: string
}
export async function doLogin({ account, password }: IDoLogin) {
  const data = await login({ account, password })
  if (data.code !== 1) {
    window.$dispatch({ type: 'updateGlobal', payload: { isLogin: true, account } })
    clientSocket.init(account)
    queryContactList()
  }
  return data
}

export function openContactSelect(fn: (list: IUser[]) => any) {
  window.$dispatch({type: 'updateContactSelect', payload: {visible: true, callback: fn}})
}