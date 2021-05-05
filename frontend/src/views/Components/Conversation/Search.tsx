import React, { useState } from 'react'
import { Input, Modal } from 'antd'
import ICon from 'src/components/Icon'
import ContactSelect from 'src/components/ContactSelect'
import style from './Search.module.scss'
import { IUser } from 'src/interface'
import { openOrCreateConversation, handCreateGroup } from 'src/utils'
const selectedList: IUser[] = []
let groupName = ''
export default function Search() {
  const [selectShow, setSelectShow] = useState(false)
  const handleSelectChange = (data: IUser) => {
    const index = selectedList.findIndex(item => item.account === data.account)
    if (index >= 0) {
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
      openOrCreateConversation(conversationId, '0')
    } else {
      // 创建群=>创建群会话
      const confirm = Modal.confirm({
        title: '请输入群名称',
        content: <Input placeholder={'请输入群名称'} onChange={e => (groupName = e.target.value)} />,
        onOk() {
          const memberList = selectedList.map(item => item.account)
          handCreateGroup(groupName, memberList).then(async res => {
            console.log('groupInfo=', res)
            if (res) {
              await openOrCreateConversation(res.groupId, '1')
            }
            confirm.destroy()
          })
        },
      })
    }
  }
  return (
    <div className={style.search}>
      <Input placeholder={'搜索最近会话和联系人'} />
      <ICon type={'Plus'} className={style.plus} onClick={() => setSelectShow(true)} />
      <Modal visible={selectShow} onCancel={() => setSelectShow(false)} onOk={handOk} destroyOnClose={true}>
        <ContactSelect onChange={handleSelectChange} />
      </Modal>
    </div>
  )
}
