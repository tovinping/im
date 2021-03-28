import {IBaseMsg} from './message'
type ITopState = '0' | '1'
type IConversationType = '0' | '1' // 0单聊1群聊
export interface IBaseConversation {
  id: string
  type: IConversationType
  lastMsg?: IBaseMsg
  topState: ITopState
}