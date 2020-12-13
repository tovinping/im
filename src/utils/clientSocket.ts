import { Manager, Socket } from 'socket.io-client'
class ClientSocket {
  static socket: Socket
  static init() {
    if (this.socket) return;
    const manager = new Manager('ws://localhost:4000')
    this.socket = manager.socket('/')

    this.socket.on('connect', () => {
      console.log(`connect ${this.socket.id}`)
    })

    this.socket.on('disconnect', () => {
      console.log(`disconnect`)
    })
  }
  static sendMsg() {
    this.socket.send('sss', () => {
      console.log('send ok')
    })
  }
}

export default ClientSocket
