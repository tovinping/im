import { IUser } from 'src/interface'
const initialState: IUser.IUserState = {
}
export default function reducer(
  state = initialState,
  actions: IUser.IActions
): IUser.IUserState {
  switch (actions.type) {
    case 'setUserMap':
      return { ...state, ...actions.payload }
    default:
      return state
  }
}
