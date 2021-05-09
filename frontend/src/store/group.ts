import { IGroupState, IGroupActions } from 'src/interface'
const initialState: IGroupState = {}
export default function reducer(state = initialState, actions: IGroupActions): IGroupState {
  switch (actions.type) {
    case 'setGroup':
      return { ...state, ...actions.payload }
    default:
      return state
  }
}
