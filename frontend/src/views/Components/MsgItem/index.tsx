import React from 'react'
import { IMessage } from 'src/interface'
import MsgText from '../MsgItemText'

export default function MsgItem(props: IMessage.IMsg) {
  return (
    <div>
      <MsgText {...props} />
    </div>
  )
}
