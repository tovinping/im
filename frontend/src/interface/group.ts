import { ITransferActions } from '.'
import { IBaseGroup } from '../../../typings'
export interface IGroupInfo extends IBaseGroup {}

export type IGroupState = Record<string, IGroupInfo | undefined>

interface IActionsMap {
  setGroup: IGroupState
}

export type IGroupActions = ITransferActions<IActionsMap>[keyof IActionsMap]
