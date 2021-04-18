import {IBaseConversation} from '../../../typing/conversation'
import {ITransferActions} from '../interface'
export interface IConversation extends IBaseConversation {
  timestamp?: number
  draft?: string
  unRead?: number
}
export interface IConversationState {
  list: IConversation[]
  current: IConversation | undefined
}

export type ICreateType = Required<Pick<IConversation, 'id' | 'type'>> & Partial<IConversation>

export type IUpdateType = Required<Pick<IConversation, 'id'>> & Partial<IConversation>

interface IActionsMap {
  setConversationList: IConversation[]
  addConversation: IConversation
  updateConversation: IConversation
  removeConversation: IConversation
  setCurrentConversation: IConversation
}
export type IActions = ITransferActions<IActionsMap>[keyof IActionsMap]