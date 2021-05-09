import {ITransferActions} from '../interface'

export interface IGlobalState {
  isLogin: boolean
  account: string
  windowSize: 'maxSize' | 'minSize' | 'normalSize'
  windowVisible: 'hide' | 'show'
}

interface IActionsMap {
  updateGlobal: Partial<IGlobalState>
  updateLogin: IGlobalState['isLogin']
  updateAccount: IGlobalState['account']
}
export type IGlobalActions = ITransferActions<IActionsMap>