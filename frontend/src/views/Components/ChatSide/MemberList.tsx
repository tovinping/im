import React from 'react'
import { useRootState } from 'src/store'
import Icon from 'src/components/Icon'
import style from './MemberList.module.scss'
import MemberItem from './MemberItem'
export default function MemberList() {
  const curId = useRootState(state => state.conversation.current?.conversationId)
  const memberList = useRootState(state => state.member[curId!])
  if (!memberList?.length) return null
  return (
    <div className={style.memberList}>
      <ul className={style.listWrap}>
        <li className={style.addMember}>
          <div>
            <Icon type={'Plus'} width={30} height={30} fill={'#666'}/>
          </div>
          <span>添加</span>
        </li>
        {memberList.map(item => <MemberItem account={item.account} />)}
      </ul>
    </div>
  )
}
