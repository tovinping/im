export type ITransferActions<T> = {
  [K in keyof T]: {
    type: K
    payload: T[K]
  }
}
export interface IAnyObj<T = any> {
  [K: string]: T
}
