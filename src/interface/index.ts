export type ITransferActions<T> = {
  [K in keyof T]: {
    type: K
    payload: T[K]
  }
}
export interface IAnyObj<T = any> {
  [K: string]: T
}
export interface IBaseRes<T = any> {
  code: 0 | -1
  msg: string
  data: T
}
