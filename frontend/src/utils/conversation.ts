import { IConversation } from "src/interface"

export function getConversation() {
  window.$dispatch({type: 'setConversationList', payload: []})
}
// 创建最近会话模板
export function crateTemplate(data: IConversation.ICreateType): IConversation.IConversation {
  return {
    id: data.id,
    type: data.type,
    topState: data.topState ?? '0'
  }
}
// 创建会话
export function createConversation({id, type}: Pick<IConversation.IConversation, 'id' | 'type'>) {
  const tem = crateTemplate({id, type})
  if (window.$state.conversation.current?.id === id) {
    return;
  }
  const listItem = window.$state.conversation.list.find(i => i.id === tem.id)
  if (listItem) {
    window.$dispatch({type: 'setCurrentConversation', payload: listItem})
    return;
  }
  if (type === '0') {
    window.$dispatch({type: 'addConversation', payload: tem})
  } else {
    console.log('创建群聊未实现')
  }
}