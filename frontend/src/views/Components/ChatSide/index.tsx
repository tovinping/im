import React, {useEffect} from 'react'
import {useRootState} from 'src/store'
import MemberList from './MemberList'
import MemberSearch from './MemberSearch'
import { handGetMemberList } from 'src/utils'
import style from './index.module.scss'
export default function ChatSide() {
  const currentId = useRootState(state => state.conversation.current?.conversationId)
  const currentType = useRootState(state => state.conversation.current?.type)
  useEffect(() => {
    if (currentType === '1' && currentId) {
      handGetMemberList(currentId)
    }
  }, [currentId, currentType])
  return <div className={style.chatSide}>
    <ul>
      <li>
        <MemberSearch />
        <MemberList />
      </li>
    </ul>
  </div>
}
