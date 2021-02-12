import { IGlobalState, IActions } from 'src/interface/global'
const initialState: IGlobalState = {
  isLogin: false,
  account: '',
  windowSize: 'normalSize',
  windowVisible: 'show'
}
export default function reducer(
  state = initialState,
  actions: IActions
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
