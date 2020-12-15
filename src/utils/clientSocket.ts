import { Manager, Socket } from 'socket.io-client'

class ClientSocket {
  static socket: Socket
  static init() {
    if (this.socket) return;
    const manager = new Manager('ws://localhost:4000')
    this.socket = manager.socket('/')

    this.socket.on('connect', () => {
      console.log(`connect ${this.socket.id}`)
      this.onMessage()
    })

    this.socket.on('disconnect', () => {
      console.log(`disconnect`)
    })
  }
  static onMessage() {
    this.socket.on('chat message', (...res: any) => {
      console.log(res)
    })
  }
  static sendTextMsg(content: string) {
    console.log(this.socket)
    const res = this.socket.emit('chat message', content)
    console.log('rrrrrrrrrrrrrrrr', res)
  }
}

export default ClientSocket
