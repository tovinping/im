import { IMessage } from 'src/interface'
import {getCovIdByMsg} from 'src/utils/message'
const initialState: IMessage.IMsgState = {}
export default function reducer(
  state = initialState,
  actions: IMessage.IMsgAction
): IMessage.IMsgState {
  switch (actions.type) {
    case 'appendMsg':
      const covId = getCovIdByMsg(actions.payload) || 'undefined'
      const newData = (state[covId] || []).concat(actions.payload)
      return { ...state, [covId]: newData }
    default:
      return state
  }
}
