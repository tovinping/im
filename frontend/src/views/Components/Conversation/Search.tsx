import React, { useState } from 'react'
import { Input } from 'antd'
import ICon from 'src/components/Icon'
import ContactSelect from 'src/components/ContactSelect'
import style from './Search.module.scss'
import { IUser } from 'src/interface'
import {conversation} from 'src/utils'
export default function Search() {
  const [selectShow, setSelectShow] = useState(false)
  const handlePlusClick = () => {
    setSelectShow(true)
    console.log('handlePlusClick')
  }
  const handleSelectCallback = (list?: IUser.IUser[]) => {
    setSelectShow(false)
    if (!list || list?.length === 0) return;
    // 创建单聊
    if (list?.length === 1) {
      const item = list[0]
      conversation.createConversation({id: item.account, type: '0'})
    } else {// 创建群=>创建群会话
      console.log('创建群聊呀')
    }
  }
  return (
    <div className={style.search}>
      <Input placeholder={'搜索最近会话和联系人'} />
      <ICon type={'Plus'} className={style.plus} onClick={handlePlusClick} />
      {selectShow ? 
      <div className={style.createConversation}>
        <h3>创建会话</h3>
        <ContactSelect maxNum={50} callback={handleSelectCallback} />
      </div> : null}
    </div>
  )
}
