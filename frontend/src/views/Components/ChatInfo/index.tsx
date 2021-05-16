import React from 'react'
import { useRootState } from 'src/store'
import Icon from 'src/components/Icon'
import style from './index.module.scss'
let i = 0
export default function ChatInfo() {
  const currentId = useRootState(state => state.conversation.current?.conversationId)
  const groupInfo = useRootState(state => state.group[currentId!])
  const userInfo = useRootState(state => state.user[currentId!])
  function handMore() {
    const flag = i % 2 === 0
    const notice = flag ? '' : '我是中国人呀'.repeat(30)
    ++i
    window.$dispatch({
      type: 'updateGroup',
      payload: {
        groupId: currentId!,
        notice,
      },
    })
  }
  return (
    <div className={style.chatInfo}>
      <div className={style.chatName}>{groupInfo?.name || userInfo?.chinesName || ''}</div>
      <ul className={style.chatOption}>
        <li className={style.chatOptionItem}>
          <Icon type={'ThreeDots'} onClick={handMore} />
        </li>
      </ul>
    </div>
  )
}
