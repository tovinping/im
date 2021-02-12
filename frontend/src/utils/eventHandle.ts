import { globalDispatch } from 'src/store'
const windowSize: { [K: string]: () => void } = {
  maxSize() {
    globalDispatch({ type: 'updateGlobal', payload: { windowSize: 'maxSize' } })
  },
  minSize() {
    globalDispatch({ type: 'updateGlobal', payload: { windowSize: 'minSize' } })
  },
  normalSize() {
    globalDispatch({ type: 'updateGlobal', payload: { windowSize: 'normalSize' } })
  },
}
window.handleBroadcast = (channel: string, payload: any) => {
  console.log('receive broadcast:', channel, payload)
  windowSize[channel]?.()
}

export {}
