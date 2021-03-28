import React from 'react'
import { IMessage } from 'src/interface'
export default function MsgItemText(props: IMessage.IMsg) {
  return <div>{props.content}</div>
}
