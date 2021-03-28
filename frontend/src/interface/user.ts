import { ITransferActions } from '.'
import { IBaseUser } from '../../../typing/user'
export interface IUser extends IBaseUser{}
export type IUserState = Record<string, IUser | undefined>

interface IActionsMap {
  setUserMap: IUserState
}
export type IActions = ITransferActions<IActionsMap>[keyof IActionsMap]
