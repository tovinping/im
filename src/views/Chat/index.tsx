import React from 'react'
import { useSelector } from 'src/store'
import Conversation from 'src/views/Components/Conversation'
import MsgList from '../Components/MsgList'
import Editor from '../Components/Editor'
const style = require('./index.module.scss')
export default function Chat() {
  const conversation = useSelector((state) => state.conversation)
  console.log(conversation)
  return (
    <div className={style.chatContainer}>
      <div className={style.chatLeft}>
        <Conversation />
      </div>
      <div className={style.chatRight}>
        <div className={style.msgListWrap}>
          <MsgList />
        </div>
        <div className={style.editorWrap}>
          <Editor />
        </div>
      </div>
    </div>
  )
}
