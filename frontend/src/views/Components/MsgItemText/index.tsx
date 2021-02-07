import React from 'react'
import {IMsgItem} from 'src/interface/message'
export default function MsgItemText(props: IMsgItem) {
  return <div>{props.content}</div>
}