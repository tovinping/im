import { ipcRenderer, remote } from 'electron'
ipcRenderer.on('maxSize', () => {
  console.log('maxSize...')
})
ipcRenderer.on('minSize', () => {
  console.log('minSize...')
})
ipcRenderer.on('normalSize', () => {
  console.log('normalSize...')
})