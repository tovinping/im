import { IMemberState, IMemberActions } from 'src/interface'
const initialState: IMemberState = {}
export default function reducer(state = initialState, actions: IMemberActions): IMemberState {
  switch (actions.type) {
    case 'setMember':
      return { ...state, ...actions.payload }
    default:
      return state
  }
}
