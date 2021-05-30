import { IMemberInfo } from 'src/interface'
import { IBaseContextItem } from 'src/components/ContextMenu'
import { updateAdmin } from 'src/api'
import { openOrCreateConversation } from 'src/utils'
type IMemberContextItem = IBaseContextItem<IMemberInfo>
type IMemberFn = (m: IMemberInfo, l: IMemberContextItem[]) => void

export const buildSendMsg: IMemberFn = (member, list) => {
  list.push({
    key: 'sendMsg',
    name: '发送消息',
    cb() {
      const conversation = openOrCreateConversation(member.account, '0')
      if (!conversation) {
        console.error('创建会话失败')
      }
    },
  })
}
export const buildAt: IMemberFn = (member, list) => {
  list.push({
    key: 'at',
    name: '@TA',
    cb() {
      console.log('@TA', member)
    },
  })
}
export const buildManagerOpt: IMemberFn = (member, list) => {
  if (member.type === '2') return
  const name = member.type === '1' ? '取消管理员' : '设置管理员'
  list.push({
    key: 'memberType',
    name,
    cb() {
      const { groupId, type, account } = member
      const changedType = type === '1' ? '0' : '1'
      updateAdmin({ groupId, account, type: changedType }).then(res => {
        if (res.code === 0) {
          window.$dispatch({ type: 'updateMember', payload: { account, type: changedType, groupId } })
        }
      })
    },
  })
}
export function buildMemberMenu(member: IMemberInfo): IMemberContextItem[] {
  const contextList: IMemberContextItem[] = []
  buildSendMsg(member, contextList)
  buildAt(member, contextList)
  buildManagerOpt(member, contextList)
  return contextList
}
// 检查元素是否超出边界
interface ICheckBoundary {
  current: HTMLElement
  container?: HTMLElement
  x: number
  y: number
}
export function checkBoundary({ current, container, x, y }: ICheckBoundary) {
  container = container ?? document.body
  const ofw1 = current.offsetWidth
  const ofh1 = current.offsetHeight
  const ofl1 = x ?? current.offsetLeft
  const oft1 = y ?? current.offsetTop
  const ofw2 = container.offsetWidth
  const ofh2 = container.offsetHeight
  const obj = { x: false, y: false, value: '' }
  if (ofw2 - ofl1 < ofw1) {
    obj.x = true
    obj.value = ofw2 - ofl1 + 'px'
  } else if (ofh2 - oft1 < ofh1) {
    obj.y = true
    obj.value = ofh2 - oft1 + 'px'
  }
  return obj
}
