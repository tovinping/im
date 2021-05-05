import React, { useState } from 'react'
import { Input, Modal } from 'antd'
import ICon from 'src/components/Icon'
import ContactSelect from 'src/components/ContactSelect'
import style from './Search.module.scss'
import { IUser } from 'src/interface'
import { openOrCreateConversation } from 'src/utils'
const selectedList: IUser[] = []
export default function Search() {
  const [selectShow, setSelectShow] = useState(false)
  const handleSelectChange = (data: IUser) => {
    const index = selectedList.findIndex(item => item.account === data.account)
    if (index>=0) {
      selectedList.splice(index, 1)
    } else {
      selectedList.push(data)
    }
  }

  const handOk = () => {
    setSelectShow(false)
    if (!selectedList || selectedList?.length === 0) return
    // 创建单聊
    if (selectedList?.length === 1) {
      const conversationId = selectedList[0].account
      openOrCreateConversation(conversationId, '0' )
    } else {
      // 创建群=>创建群会话
      console.log('创建群聊呀')
    }
  }
  return (
    <div className={style.search}>
      <Input placeholder={'搜索最近会话和联系人'} />
      <ICon type={'Plus'} className={style.plus} onClick={() => setSelectShow(true)} />
      <Modal visible={selectShow} onCancel={()=> setSelectShow(false)} onOk={handOk}>
        <ContactSelect onChange={handleSelectChange} />
      </Modal>
    </div>
  )
}
