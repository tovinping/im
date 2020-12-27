import React from 'react'
import {useSelector} from 'src/store'
import MsgItem from '../MsgItem'

export default function MsgList () {
  const message = useSelector(state => state.message)
  const currentConversationId = useSelector(state => state.conversation.current.id)
  const msgList = message[currentConversationId!] || []
  console.log(msgList, message, currentConversationId)
  return <div>{msgList.map(item => <MsgItem key={item.msgId} {...item} />)}</div>
}