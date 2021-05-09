import { getMemberList } from 'src/api/member'

export async function handGetMemberList(groupId: string) {
  const { data, code } = await getMemberList(groupId)
  if (code === 0) {
    window.$dispatch({ type: 'setMember', payload: { [groupId]: data! } })
  }
}
