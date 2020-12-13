import {ITransferActions} from '../interface'
export interface IConversation {
  id: string
  name: string
  type: 0 | 1 // 0单聊1群聊
  lastMsg?: string
  timestamp?: number
  draft?: string
  unRead?: number
}
export interface IConversationState {
  list: IConversation[]
  current: Partial<IConversation>
}

interface IActionsMap {
  setConversationList: IConversation[]
  updateConversation: IConversation
  removeConversation: IConversation
  setCurrentConversation: IConversation
}
export type IActions = ITransferActions<IActionsMap>[keyof IActionsMap]