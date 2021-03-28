import React, { useState } from 'react'
import { Input } from 'antd'
import ICon from 'src/components/Icon'
import ContactSelect from 'src/components/ContactSelect'
import style from './Search.module.scss'
import { IUser } from 'src/interface'
export default function Search() {
  const [selectShow, setSelectShow] = useState(false)
  const handlePlusClick = () => {
    setSelectShow(true)
    console.log('handlePlusClick')
  }
  const handleSelectCallback = (list?: IUser.IUser[]) => {}
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
