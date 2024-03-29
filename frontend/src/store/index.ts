import { createStore, combineReducers } from 'redux'
import { createSelectorHook } from 'react-redux'

import global from './global'
import conversation from './conversation'
import message from './message'
import user from './user'
import group from './group'
import member from './member'

const rootReducer = combineReducers({
  member,
  group,
  user,
  global,
  conversation,
  message
})
const store = createStore(rootReducer)

export type IRootStateType = ReturnType<typeof rootReducer>
export type IRootDispatchType = typeof store.dispatch

window.$state = store.getState()
store.subscribe(() => {
  window.$state = store.getState()
})
window.$dispatch = store.dispatch
export const useRootState = createSelectorHook<IRootStateType>()

export default store
