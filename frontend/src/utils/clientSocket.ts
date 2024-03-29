import { Manager, Socket } from 'socket.io-client'
import { IMsg } from 'src/interface'
import { handleReceiveMsg } from 'src/utils/message'
class ClientSocket {
  static socket: Socket
  static init(token: string) {
    if (this.socket) return
    const manager = new Manager('ws://localhost:4000')
    this.socket = manager.socket('/', { auth: { token } })

    this.socket.on('connect', () => {
      console.log(`connect ${this.socket.id}`)
      this.onMessage()
      this.onConnectError()
      this.disConnect()
    })
  }
  static onConnectError() {
    this.socket.on('connect_error', (err: any) => {
      console.log('connect_error:', err)
    })
  }
  static disConnect() {
    this.socket.on('disconnect', () => {
      console.log(`disconnect`)
    })
  }
  static onMessage() {
    this.socket.on('message', handleReceiveMsg)
  }
  static createMsgBase() {
    return {}
  }
  static sendTextMsg(data: IMsg) {
    this.socket.send(data, (res: any) => {
      console.log('sendMsgResult:', res)
    })
  }
}

export default ClientSocket
