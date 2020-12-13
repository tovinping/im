import { createStore, combineReducers } from 'redux'
import { useSelector as selector } from 'react-redux'

import conversation from './conversation'
const rootReducer = combineReducers({
  conversation,
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
