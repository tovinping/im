export type ITransferActions<T> = {
  [K in keyof T]: {
    type: K;
    payload: T[K]
  }
}