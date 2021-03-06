import React, {useRef} from 'react'
import {Button,message} from 'antd'
import {AlertTwoTone, DashOutlined, GiftTwoTone, ReadFilled} from '@ant-design/icons'
import {useSelector} from 'src/store'
import {sendTextMsg} from 'src/utils/message'
import style from './index.module.scss'

export default function Editor() {
  const currentConversation = useSelector(state => state.conversation.current)
  const editRef = useRef<HTMLDivElement>(null)
  function handSend() {
    const text = editRef.current?.innerText
    if (!text?.trim()) {
      message.error('不能发送空消息呀')
      return
    }
    editRef.current!.innerHTML = ''
    sendTextMsg(currentConversation.id!, text)
  }
  return (
    <div className={style.editorContainer}>
      <div className={style.editorExtends}>
        <AlertTwoTone title={'表情'}/>
        <DashOutlined title={'文件'}/>
        <GiftTwoTone title={'截屏'}/>
        <ReadFilled title={'历史记录'}/>
      </div>
      <div className={style.textArea} contentEditable ref={editRef}>
      </div>
      <div className={style.send}>
        <Button type={'primary'} onClick={handSend}>发送</Button>
      </div>
    </div>
  )
}
