import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { useRootState } from 'src/store'
import Conversation from 'src/views/Components/Conversation'
import MsgList from '../Components/MsgList'
import Editor from '../Components/Editor'
const style = require('./index.module.scss')
export default function Chat() {
  const history = useHistory()
  const isLogin = useRootState(state => state.global.isLogin)
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
        <MsgList />
        <Editor />
      </div>
    </div>
  )
}
