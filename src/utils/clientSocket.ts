import { Manager, Socket } from 'socket.io-client'

class ClientSocket {
  static socket: Socket
  static init() {
    if (this.socket) return
    const manager = new Manager('ws://localhost:4000')
    this.socket = manager.socket('/', { auth: { id: '003', token: 'ttt' } })

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
    console.log('startReceiveMsg...')
    this.socket.on('message', (...res: any) => {
      console.log('onReceiveMsg:', res)
    })
  }
  static createMsgBase() {
    return {}
  }
  static sendTextMsg(content: string) {
    this.socket.send(content, (res: any) => {
      console.log('sendMsgResult:', res)
    })
  }
}

export default ClientSocket
