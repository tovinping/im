import { global, conversation } from 'src/api'
import clientSocket from './clientSocket'
import {getContactList} from './user'
interface IDoLogin {
  account: string
  password: string
}
export async function doLogin({ account, password }: IDoLogin) {
  const data = await global.login({ account, password })
  if (data.code !== 1) {
    // 获取会话列表
    const result = await conversation.getConversations(account);
    console.log(result);
  }
  window.$dispatch({ type: 'updateGlobal', payload: { isLogin: true, account } })
  clientSocket.init(account)
  getContactList()
  return data
}
