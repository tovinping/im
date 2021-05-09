import { get } from '../utils/fetch'
import { IMemberInfo } from '../interface'
export function getMemberList(groupId: string) {
  return get<IMemberInfo[]>('/groupMember/byGroupId', {groupId})
}

