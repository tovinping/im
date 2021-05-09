import React, {useEffect} from 'react'
import {useRootState} from 'src/store'
import MemberList from './MemberList'
import { handGetMemberList } from 'src/utils'

export default function GroupSide() {
  const conversationId = useRootState(state => state.conversation.current?.conversationId)
  const type = useRootState(state => state.conversation.current?.type)
  useEffect(() => {
    if (type === '1' && conversationId) {
      handGetMemberList(conversationId)
    }
  }, [conversationId, type])
  return <div>
    <ul>
      <li>
        <h2>群公告</h2>
      </li>
      <li>
        <h2>群成员</h2>
        <MemberList />
      </li>
    </ul>
  </div>
}
