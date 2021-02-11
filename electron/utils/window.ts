import {remote} from 'electron'

export function closeWindow() {
  remote.getCurrentWindow().destroy()
}
export function miniSize() {
  remote.getCurrentWindow().minimize()
}
export function maxSize() {
  remote.getCurrentWindow().maximize()
}
export function normalSize() {
  remote.getCurrentWindow().restore()
}