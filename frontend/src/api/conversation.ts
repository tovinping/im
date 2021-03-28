import { get } from '../utils/fetch'
import { IConversation } from '../interface'
export function getConversations(account: string) {
  return get<IConversation.IConversation>('/conversation/list', {account})
}
