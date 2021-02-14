import 'reflect-metadata'
import * as Koa from 'koa'
import * as koaBody from 'koa-body'
import { createConnection } from 'typeorm'
import { Server, Socket } from 'socket.io'
import * as cors from 'koa2-cors'
import * as http from 'http'
import {loadRouter} from './routes'
import { IBaseMsg } from '../typing/message'
const socketMap: any = {}
const onLineMap: any = {}
let connectConfig
if (process.env.NODE_ENV === 'development') {
  connectConfig = require('C:\\config\\mysql.json')
} else {
  connectConfig = require('C:\\config\\mysql.json')
}
createConnection(connectConfig)
  .then(async () => {
    const app = new Koa()

    const server = http.createServer(app.callback())
    const io = new Server(server, { cors: { origin: '*' } })

    // 中间件
    app.use(cors())
    app.use(koaBody())
    loadRouter(app)
    // socket
    io.use((socket, next) => {
      let auth = socket.handshake.auth as any
      if (!auth.token) {
        next(new Error('token error'))
      } else {
        console.log('handshake', auth.token)
        socketMap[auth.token] = socket
        next()
      }
    })
    // socket连接
    io.on('connection', (socket: Socket) => {
      onLineMap[socket.id] = socket
      console.log('on connection...')
      socket.on('message', (msg: IBaseMsg, cb) => {
        console.log('*************', msg)
        for (const key in socketMap) {
          if (key === msg.conversationId) {
            socketMap[key].send(msg)
            break
          }
        }
        cb({ msg: 'ok' })
      })
      socket.send(Object.keys(onLineMap))
      socket.on('ping', (cb: any) => {
        console.log('ping')
        cb()
      })
      socket.on('disconnect', () => {
        console.log('user disconnected')
        delete onLineMap[socket.id]
      })
    })

    // 监听端口
    server.listen(4000, () => {
      console.log('listening on *:4000')
    })
  })
  .catch((err) => {
    console.error(err)
  })
