import React from 'react'
import classnames from 'classnames'
import { useRootState } from 'src/store'
import style from './MemberList.module.scss'
import MemberItem from './MemberItem'
interface IProps {
  listStyle?: string
  itemStyle?: string
}
export default function MemberList({ listStyle, itemStyle }: IProps) {
  const curId = useRootState(state => state.conversation.current?.conversationId)
  const owner = useRootState(state => state.group[curId!]?.owner)
  const memberList = useRootState(state => state.member[curId!])
  if (!memberList?.length) return null
  return (
    <ul className={classnames(style.memberList, listStyle)}>
      <MemberItem type={'2'} account={owner!} classNames={itemStyle} isOwner groupId={curId!} />
      {memberList.map(item => (
        <MemberItem key={item.account} account={item.account} type={item.type} groupId={curId!} classNames={itemStyle} />
      ))}
    </ul>
  )
}
