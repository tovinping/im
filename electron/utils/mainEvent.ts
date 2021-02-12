import { ipcMain, BrowserWindow } from 'electron'
let browserWindow: BrowserWindow
export function initEvent(win: BrowserWindow) {
  browserWindow = win
  win.addListener('maximize', () => {
    win.webContents.send('maxSize', { msg: 'maxSize' })
  })
  win.addListener('minimize', () => {
    win.webContents.send('minSize', { msg: 'minSize' })
  })
  win.addListener('unmaximize', () => {
    win.webContents.send('normalSize', { msg: 'normalSize' })
  })
}
