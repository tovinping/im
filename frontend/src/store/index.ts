import { createStore, combineReducers } from 'redux'
import { createSelectorHook } from 'react-redux'

import global from './global'
import conversation from './conversation'
import message from './message'

const rootReducer = combineReducers({
  global,
  conversation,
  message
})
const store = createStore(rootReducer)

type IRootState = ReturnType< typeof rootReducer>

export let globalState = store.getState()
store.subscribe(() => {
  globalState = store.getState()
})
export const globalDispatch = store.dispatch
export const useRootState = createSelectorHook<IRootState>()

export default store
