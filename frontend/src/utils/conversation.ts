import { createConversation, getConversations } from "src/api"
import { ICreateType, IConversation } from "src/interface"


export async function getConversation() {
  const account = window.$state.global.account;
  const {data, code, msg} = await getConversations(account);
  console.log('getConversation=', code, msg)
  if (data) {
    window.$dispatch({type: 'setConversationList', payload: data})
  }
}
// 创建会话
export async function handCreateConversation({conversationId, type}: Pick<ICreateType, 'conversationId' | 'type'>) {
  const owner = window.$state.global.account
  return createConversation(owner, conversationId, type)
}
// 判断是否有会话并创建
type ICheckProps = Pick<IConversation, 'conversationId' | 'type'> & {
  create?: boolean;
}
export async function checkConversation(params: ICheckProps) {
  const conversationInfo = window.$state.conversation.list.find(cov => cov.conversationId === params.conversationId)
  if (!conversationInfo && params.create) {
    const {data, code, msg} = await handCreateConversation({conversationId: params.conversationId, type: params.type})
    console.log('checkConversation=', data, code, msg)
    if (code === 0) {
      window.$dispatch({type: 'addConversation', payload: data!})
    }
    return data
  }
  return conversationInfo
}