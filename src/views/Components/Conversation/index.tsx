import React from 'react'
import {useSelector} from 'src/store'
import Item from './Item'

export default function Conversation() {
  const conversations = useSelector(state => state.conversation.list)
  return <div>{conversations.map(item => <Item key={item.id} {...item} />)}</div>
}