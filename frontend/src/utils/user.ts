import { user } from 'src/api'
export async function getContactList(pageNo = 1) {
  const result = await user.getContactList({ pageNo, pageSize: 20 })
  const oldUserMap = window.$state.user
  const userMap = { ...oldUserMap }
  if (result.code === 0) {
    result.data?.forEach(item => {
      userMap[item.account] = item
    })
    console.log('loadContactList', userMap)
    window.$dispatch({ type: 'setUserMap', payload: userMap })
  }
}
