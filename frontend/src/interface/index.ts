import { IRootDispatchType, IRootStateType } from 'src/store'
export * as IUser from './user'
export * as IGlobal from './global'
export * as IConversation from './conversation'
export * as IMessage from './message'
export type ITransferActions<T> = {
  [K in keyof T]: {
    type: K
    payload: T[K]
  }
}
export interface IAnyObj<T = any> {
  [K: string]: T
}

export interface IResBase<T = any> {
  code: 0 | 1 // 0成功1失败
  data: T | null
  msg: string
}

declare global {
  interface Window {
    NodeBridge: {
      closeWindow(): void
      miniSize(): void
      maxSize(): void
      normalSize(): void
    }
    $state: IRootStateType
    $dispatch: IRootDispatchType
    handleBroadcast<T = any>(channel: string, payload?: T): void
  }
}
