import 'reflect-metadata'
import * as Koa from 'koa'
import * as koaBody from 'koa-body'
import { createConnection } from 'typeorm'
import * as cors from 'koa2-cors'
import * as http from 'http'
import {initSocketIO} from './socketIO'
import {loadRouter} from './router'
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
    // 中间件
    app.use(cors())
    app.use(koaBody())
    loadRouter(app)
    // socket
    initSocketIO(server)
    // 监听端口
    server.listen(4000, () => {
      console.log('listening on *:4000')
    })
  })
  .catch((err) => {
    console.error(err)
  })
