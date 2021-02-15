import 'reflect-metadata'
import * as Koa from 'koa'
import { createConnection } from 'typeorm'

import * as http from 'http'
import { loadSocket } from './socket'
import { loadRouter } from './router'
import { loadMiddleware } from './middleware'
import { mysqlConfig } from './config'
createConnection(mysqlConfig)
  .then(async () => {
    const app = new Koa()
    app.context.success = (data, msg = 'ok') => {
      app.context.body = {code: 200, data, msg}
    }
    const server = http.createServer(app.callback())
    // 中间件
    loadMiddleware(app)
    // 路由
    loadRouter(app)
    // socket
    loadSocket(server)
    // 监听端口
    server.listen(4000, () => {
      console.log('listening on *:4000')
    })
  })
  .catch((err) => {
    console.error(err)
  })
