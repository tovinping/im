import Koa from 'koa'
import Router from 'koa-router'
import koaBody from 'koa-body'
import {Server, Socket} from 'socket.io'
import cors from 'koa2-cors'
import * as fs from 'fs'
import * as http from 'http'
import {IMsgParam} from '../../interface/message'
const userMap: any = {
  test: {
    name: 'test',
    isLogin: false
  },
  test123: {
    name: 'test123',
    isLogin: false
  },
}
const socketMap: any = {}
const onLineMap: any = {}

const app = new Koa()
const server = http.createServer(app.callback())
const io = new Server(server, {cors: {origin: '*'}})

// 中间件
app.use(cors())
app.use(koaBody())

// 首页路由
let router = new Router()
router.get('/', (ctx: any) => {
  ctx.response.type = 'html'
  ctx.response.body = fs.createReadStream('./index.html')
})
router.get('/test', (ctx: any) => {
  ctx.body = 'testAb'
})
router.get('/login', (ctx: any) => {
  console.log(ctx.query)
  const {account} = ctx.query
  if (!account) {
    ctx.body = {code: -1, msg:'参数错误'} 
  } else if (userMap[account] && !userMap[account].isLogin) {
    userMap[account].isLogin = true
    ctx.body = {code: 0, msg: '登录成功', data: userMap[account]}
  } else {
    ctx.body = {code: -1, msg: '帐号不存在或者已经登录'}
  }
})

app.use(router.routes())

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
  socket.on('message', (msg: IMsgParam, cb) => {
    console.log('*************', msg)
    for (const key in socketMap) {
      if (key  === msg.conversationId) {
        socketMap[key].send(msg)
        break;
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
