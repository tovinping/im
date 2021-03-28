export enum IMsgType {
  TEXT = 0,
  IMAGE = 1,
  VIDEO = 2,
  AUDIO = 3,
  FILE = 4
}
export enum IMsgState {
  NORMAL = 0,
  WITHDRAW = 1,
  DELETE = 2
}
export interface IBaseMsg {
  /**服务器生产的消息ID */
  id: string
  /**服务器判断本会话是归属当前登录用户*/
  owner: string
  type: IMsgType
  timestamp: number
  state: IMsgState
  senderId: string
  receiveId: string
  /**主动发送时产生的消息ID */
  clientId?: string
  /**消息内容*/
  content: string;
}
