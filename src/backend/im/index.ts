import Koa from 'koa'
import Router from 'koa-router'
import {Server, Socket} from 'socket.io'
import cors from 'koa2-cors'
import * as fs from 'fs'
import * as http from 'http'

const app = new Koa()
const server = http.createServer(app.callback())
const io = new Server(server, {cors: {origin: '*'}})

// socket连接允许跨域

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

// socket连接
io.on('connection', (socket: Socket) => {
  socket.on('chat message', (msg: any) => {
    console.log('message: ' + msg)
    io.emit('chat message', msg)
  })
  socket.on('ping', (cb: any) => {
    console.log('ping')
    cb()
  })
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

// 监听端口
server.listen(4000, () => {
  console.log('listening on *:4000')
})
