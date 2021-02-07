import { createStore, combineReducers } from 'redux'
import { useSelector as selector } from 'react-redux'

import global from './global'
import conversation from './conversation'
import message from './message'

const rootReducer = combineReducers({
  global,
  conversation,
  message
})
const store = createStore(rootReducer)

type IRootState = typeof globalState

export let globalState = store.getState()
store.subscribe(() => {
  globalState = store.getState()
})
export const globalDispatch = store.dispatch
export function useSelector<T = unknown>(fn: (state: IRootState) => T) {
  return selector(fn)
}
export default store
