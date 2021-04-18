import { IMessage } from 'src/interface'
import clientSocket from './clientSocket'
import {createConversation} from './conversation'
import { getRandomStr } from './'

type ISendType = Pick<IMessage.IMsg, 'receiveId' | 'content' | 'chatType'>
export function createMsgTemplate(data: ISendType): IMessage.IMsg {
  const senderId = window.$state.global.account
  return {
    id: getRandomStr(),
    chatType: data.chatType,
    timestamp: Date.now(),
    type: 0,
    state: 0,
    receiveId: data.receiveId,
    senderId,
    content: data.content
  }
}

export function sendTextMsg({receiveId, content, chatType}: Required<ISendType>) {
  const data = createMsgTemplate({receiveId, chatType, content })
  window.$dispatch({type: 'appendMsg', payload: data})
  clientSocket.sendTextMsg(data)
}

export function handleReceiveMsg(data: IMessage.IMsg) {
  console.log('handleReceiveMsg', data)
  if (data && data.senderId) {
    window.$dispatch({ type: 'appendMsg', payload: data })
  }
  // 没有此会话需要创建
  const covId = getCovIdByMsg(data)
  const covItem = window.$state.conversation.list.find(cov => cov.id === covId)
  if (!covItem && covId) {
    createConversation({id: covId, type: data.chatType})
  }
}

export function getCovIdByMsg(data: IMessage.IMsg) {
  const myId = window.$state.global.account
  return data.chatType === '1' ? data.groupId : data.receiveId === myId ? data.senderId : data.receiveId
}