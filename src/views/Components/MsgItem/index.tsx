import React from 'react'
import {IMsgItem} from 'src/interface/message'
import MsgText from '../MsgItemText'

export default function MsgItem(props: IMsgItem) {
  return <div><MsgText {...props} /></div>
}
