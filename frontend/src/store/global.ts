import { IGlobalState, IGlobalActions } from 'src/interface'
const initialState: IGlobalState = {
  isLogin: false,
  account: '',
  windowSize: 'normalSize',
  windowVisible: 'show'
}
export default function reducer(
  state = initialState,
  actions: IGlobalActions
): IGlobalState {
  switch (actions.type) {
    case 'updateGlobal':
      return { ...state, ...actions.payload }
    case 'updateLogin': 
      return {...state, isLogin: actions.payload}
    case 'updateAccount':
      return {...state, account: actions.payload}
    default:
      return state
  }
}
