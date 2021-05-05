import {createGroup, getGroupList} from 'src/api'
import {IGroupState} from 'src/interface'
/**
 * 创建群组
 * @param groupName 
 * @param memberList 
 * @returns 
 */
export async function handCreateGroup(groupName: string, memberList: string[]) {
  const owner = window.$state.global.account
  const {data, code} = await createGroup({groupName, owner, memberList})
  if (code === 0) {
    return data
  } else {
    return null
  }
}

export async function handGetGroupList() {
  const account = window.$state.global.account
  const {data, code, msg} = await getGroupList(account)
  console.log('handGetGroupList', data, code, msg)
  if (code === 0) {
    const groupMap: IGroupState = {}
    data?.forEach(item => {
      groupMap[item.groupId] = item
    })
    window.$dispatch({type: 'setGroup', payload: groupMap})
    return data
  } else {
    return []
  }
}