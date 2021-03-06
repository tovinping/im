import React, {useEffect} from 'react'
import {useHistory} from 'react-router'
import { useSelector } from 'src/store'
import Conversation from 'src/views/Components/Conversation'
import MsgList from '../Components/MsgList'
import Editor from '../Components/Editor'
import {getConversation} from 'src/utils/conversation'
const style = require('./index.module.scss')
export default function Chat() {
  const history = useHistory()
  const isLogin = useSelector(state => state.global.isLogin)
  useEffect(() => {
    getConversation()
  }, [])
  useEffect(() => {
    if (!isLogin) {
      history.replace('/')
    }
  }, [isLogin, history])
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
