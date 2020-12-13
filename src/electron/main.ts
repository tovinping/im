import { app, BrowserWindow, ipcMain } from 'electron'
import * as path from 'path'
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    // frame: false,
    height: 600,
    webPreferences: {
      contextIsolation: false,
      enableRemoteModule: true,
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  })
  // mainWindow.loadURL('http://localhost:3000/')
  const fileUrl = path.resolve(__dirname, '../build/index.html')
  mainWindow.loadFile(fileUrl)
  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  ipcMain.on('closeBefore', (evt, data) => {
    console.log('closeBefore##', data)
    mainWindow.destroy()
  })
  mainWindow.on('close',() => {
    console.log('main process listen close')
  })
  mainWindow.on('closed', () => {
    console.log('mainWindow is closed...')
  })
  // ipcMain.on('closeWindow', (evt, data) => {
  //   console.log('closeWindow##', data)
  //   mainWindow.close()
  // })
}

app.on('ready', () => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
