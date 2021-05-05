import React from 'react'
import classnames from 'classnames'
import {useRootState} from 'src/store'
import { IConversation } from 'src/interface'
import defaultAvatar from 'src/resource/images/avatar1.jpg'
import style from './Item.module.scss'
export default function ConversationItem(props: IConversation) {
  const currentId = useRootState(state => state.conversation.current?.conversationId)
  const userInfo = useRootState(state => state.user[props.conversationId])
  const groupInfo = useRootState(state => state.group[props.conversationId])
  const conversationName = userInfo?.chinesName || groupInfo?.name
  function handleClick() {
    window.$dispatch({type: 'setCurrentConversation', payload: props})
  }
  return (
    <div className={classnames(style.itemContainer, currentId === props.conversationId && style.active)} onClick={handleClick}>
      <img className={style.avatar} src={defaultAvatar} alt="" />
      <div className={style.extendInfo}>
        <div>{conversationName || ''}</div>
        <div>{props.lastMsg}</div>
      </div>
    </div>
  )
}
