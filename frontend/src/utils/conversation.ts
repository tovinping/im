import {globalDispatch, globalState} from 'src/store'
import {IConversation} from 'src/interface/conversation'
const testConversation: IConversation[]= [
  { id: 'test', name: 'test', type: 0 },
  { id: 'test123', name: 'test123', type: 0 },
  { id: 'other', name: 'other', type: 0 }
]
export function getConversation() {
  const account = globalState.global.account
  const conversationData = Object.values(testConversation).filter(item => item.id !== account)
  globalDispatch({type: 'setConversationList', payload: conversationData})
}
