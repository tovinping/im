import { ITransferActions } from '.'
import { IBaseMemberInfo } from '../../../typings'
export interface IMemberInfo extends IBaseMemberInfo {}

export type IMemberState = Record<string, IMemberInfo[] | undefined>

interface IActionsMap {
  setMember: IMemberState
}

export type IMemberActions = ITransferActions<IActionsMap>
