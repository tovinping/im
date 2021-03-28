import React from 'react'
import classnames from 'classnames'
import {useRootState} from 'src/store'
import { IConversation } from 'src/interface'
import defaultAvatar from 'src/resource/images/avatar1.jpg'
import style from './Item.module.scss'
export default function ConversationItem(props: IConversation.IConversation) {
  const currentId = useRootState(state => state.conversation.current.id)
  function handleClick() {
    window.$dispatch({type: 'setCurrentConversation', payload: props})
  }
  return (
    <div className={classnames(style.itemContainer, currentId === props.id && style.active)} onClick={handleClick}>
      <div className={style.left}>
        <img src={defaultAvatar} alt="" />
      </div>
      <div>
        <div>{props.lastMsg}</div>
      </div>
    </div>
  )
}
