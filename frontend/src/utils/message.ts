import { IMsgParam, IMsgItem} from 'src/interface/message'
import {globalDispatch, globalState} from 'src/store'
import Socket from './clientSocket'
let count = 1
export function createMsgParam(conversationId: string, data: Partial<IMsgItem>): IMsgParam {
  const senderId = globalState.global.account
  return {
    msgId: `${count}`,
    msgType: 0,
    conversationId,
    senderId,
    ...data
  }
}

export function sendTextMsg(conversationId: string, content: string) {
  Socket.sendTextMsg(createMsgParam(conversationId, {content}))
}

export function handleReceiveMsg(data: IMsgParam) {
  console.log('handleReceiveMsg', data)
  if (data && data.conversationId) {
    globalDispatch({type: 'appendMsg', payload: data})
  }
}
