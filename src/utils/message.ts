import Socket from './clientSocket'
export function sendTextMsg(text: string) {
  Socket.sendTextMsg(text)
}