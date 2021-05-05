import { post, get } from '../utils/fetch'
import { IGroupInfo } from '../interface'
interface ICreateGroupReq {
  groupName: string,
  memberList: string[]
  owner: string;
}
export function createGroup(params: ICreateGroupReq) {
  return post<IGroupInfo>('/group/add', params)
}
export function getGroupList(account: string) {
  return get<IGroupInfo[]>('/groupList/list', {account})
}