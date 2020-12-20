import Koa from 'koa'
import Router from 'koa-router'
import {Server, Socket} from 'socket.io'
import cors from 'koa2-cors'
import * as fs from 'fs'
import * as http from 'http'

const onLineMap: any = {}

const app = new Koa()
const server = http.createServer(app.callback())
const io = new Server(server, {cors: {origin: '*'}})

// 中间件
app.use(cors())

// 首页路由
let router = new Router()
router.get('/', (ctx: any) => {
  ctx.response.type = 'html'
  ctx.response.body = fs.createReadStream('./index.html')
})
router.get('/test', (ctx: any) => {
  ctx.body = 'testAb'
})
app.use(router.routes())

io.use((socket, next) => {
  let handshake = socket.handshake;
  console.log('handshake', handshake.auth, socket.id)
  // next(new Error('token error'))
  next()
})
// socket连接
io.on('connection', (socket: Socket) => {
  onLineMap[socket.id] = socket
  console.log('on connection...')
  socket.on('message', (msg, cb) => {
    console.log('*************', msg)
    for (const key in onLineMap) {
      if (key !== socket.id) {
        onLineMap[key].send(msg)
      }
    }
    cb({msg: 'ok'})
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
