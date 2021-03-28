import React from 'react'
import {useRootState} from 'src/store'
import Item from './Item'

export default function Conversation() {
  const conversations = useRootState(state => state.conversation.list)
  return <div>{conversations.map(item => <Item key={item.id} {...item} />)}</div>
}