import { IMessage } from 'src/interface'
import clientSocket from './clientSocket'
import { getRandomStr } from './'

interface ICreateMsgTemplate {
  receiveId: string
  data: Partial<IMessage.IMsg>
}
export function createMsgTemplate({ receiveId, data }: ICreateMsgTemplate): IMessage.IMsg {
  const senderId = window.$state.global.account
  return {
    id: getRandomStr(),
    timestamp: Date.now(),
    type: 0,
    state: 0,
    senderId,
    owner: senderId,
    receiveId,
    content: '',
    ...data,
  }
}

export function sendTextMsg(receiveId: string, content: string) {
  clientSocket.sendTextMsg(createMsgTemplate({ receiveId, data: { content } }))
}

export function handleReceiveMsg(data: IMessage.IMsg) {
  console.log('handleReceiveMsg', data)
  if (data && data.senderId) {
    window.$dispatch({ type: 'appendMsg', payload: data })
  }
}
