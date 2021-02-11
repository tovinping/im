import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import * as mainEvent from './utils/mainEvent'
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    frame: false,
    height: 600,
    webPreferences: {
      contextIsolation: false,
      enableRemoteModule: true,
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  })
  let fileUrl = ''
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:3000/')
  } else {
    fileUrl = path.resolve(__dirname, '../build/index.html')
    mainWindow.loadFile(fileUrl)
  }
  mainEvent.initEvent(mainWindow)
  mainWindow.webContents.openDevTools()
}

app.on('ready', () => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
