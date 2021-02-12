import { ipcRenderer } from 'electron'
ipcRenderer.on('maxSize', () => {
  window.handleBroadcast('maxSize')
})
ipcRenderer.on('minSize', () => {
  window.handleBroadcast('minSize')
})
ipcRenderer.on('normalSize', () => {
  window.handleBroadcast('normalSize')
})