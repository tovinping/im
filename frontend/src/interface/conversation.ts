import {IBaseConversation} from '../../../typing/conversation'
import {ITransferActions} from '../interface'
export interface IConversation extends IBaseConversation {
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