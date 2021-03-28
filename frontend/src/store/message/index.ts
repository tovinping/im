import { IMessage } from 'src/interface'
const initialState: IMessage.IMsgState = {}
export default function reducer(
  state = initialState,
  actions: IMessage.IMsgAction
): IMessage.IMsgState {
  switch (actions.type) {
    case 'appendMsg':
      const newData = (state[actions.payload.senderId] || []).concat(actions.payload)
      return { ...state, [actions.payload.senderId]: newData }
    default:
      return state
  }
}
