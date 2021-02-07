import { IMsgState, IActions } from 'src/interface/message'
const initialState: IMsgState = {}
export default function reducer(
  state = initialState,
  actions: IActions
): IMsgState {
  switch (actions.type) {
    case 'appendMsg':
      const newData = (state[actions.payload.senderId] || []).concat(actions.payload)
      return { ...state, [actions.payload.senderId]: newData }
    default:
      return state
  }
}
