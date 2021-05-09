import React from 'react'
import { useRootState } from 'src/store'
export default function MemberList() {
  const curId = useRootState(state => state.conversation.current?.conversationId)
  const memberList = useRootState(state => state.member[curId!])
  if (!memberList?.length) return null
  return <div>
    {memberList.map(item => {
      return <div>{item.account}</div>
    })}
  </div>
}