type IMsgType = 'text' | 'video' | 'image' | 'audio' | 'file'
export interface IBaseMsg {
  msgId: string
  conversationId: string
  type: IMsgType
  time: string
  clientId?: string
}
