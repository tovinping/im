import { IConversationState, IActions, IConversation } from 'src/interface/conversation'
const initialState: IConversationState = {
  list: [],
  current: {},
}
function getCurrent(data: IConversation) {
  return initialState.current.id === data.id ? data : initialState.current
}
export default function reducer(
  state = initialState,
  actions: IActions
): IConversationState {
  switch (actions.type) {
    case 'setConversationList':
      return { ...state, list: actions.payload }
    case 'removeConversation':
      const rList = state.list.filter((item) => item.id !== actions.payload.id)
      return { ...state, list: rList, current: getCurrent(actions.payload) }
    case 'setCurrentConversation':
      return { ...state, current: actions.payload }
    case 'updateConversation':
      const uList = state.list.map((item) =>
        item.id === actions.payload.id ? actions.payload : item
      )
      return { ...state, list: uList, current: getCurrent(actions.payload) }
    default:
      return { ...state }
  }
}
