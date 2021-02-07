import {ITransferActions} from '../interface'

export interface IGlobalState {
  isLogin: boolean
  account: string;
}

interface IActionsMap {
  updateGlobal: Partial<IGlobalState>
  updateLogin: IGlobalState['isLogin']
  updateAccount: IGlobalState['account']
}
export type IActions = ITransferActions<IActionsMap>[keyof IActionsMap]