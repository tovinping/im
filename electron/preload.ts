/// <reference path="../typings/index.ts" />
import './utils/renderEvent'
import * as windowUtils from './utils/window'
window.NodeBridge = {
  ...windowUtils
}
export {}
