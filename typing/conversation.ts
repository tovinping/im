type IConversationType = 0 | 1 // 0单聊1群聊
export interface IBaseConversation {
  id: string
  name: string
  type: IConversationType
  lastMsg?: string
  timestamp?: number
  draft?: string
  unRead?: number
}