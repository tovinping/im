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
