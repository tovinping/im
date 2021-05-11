import React from 'react'
import { useRootState } from 'src/store'
import Icon from 'src/components/Icon'
import style from './index.module.scss'
export default function ChatInfo() {
  const currentId = useRootState(state => state.conversation.current?.conversationId)
  const groupInfo = useRootState(state => state.group[currentId!])
  const userInfo = useRootState(state => state.user[currentId!])
  return <div className={style.chatInfo}>
    <div className={style.chatName}>{groupInfo?.name || userInfo?.chinesName || ''}</div>
    <ul className={style.chatOption}>
      <li className={style.chatOptionItem}><Icon type={'ThreeDots'} /></li>
    </ul>
  </div>
}