import React from 'react'
import { useRootState } from 'src/store'
import MsgItem from '../MsgItem'

export default function MsgList() {
  const message = useRootState(state => state.message)
  const currentConversationId = useRootState(state => state.conversation.current.id)
  const msgList = message[currentConversationId!] || []
  return (
    <div>
      {msgList.map(item => (
        <MsgItem key={item.id} {...item} />
      ))}
    </div>
  )
}
