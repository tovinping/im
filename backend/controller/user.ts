import { Context } from 'koa'
import * as md5 from 'md5'
import { User } from '../models/User'
import { Get, Post } from '../router'

export default class UserController {
  @Get('/users')
  async getUsers(ctx: Context) {
    const users = await User.find()
    ctx.body = users
  }
  @Post('/user')
  addUser(ctx: Context) {
    try {
      const data = ctx.request.body
      if (!data.account || !data.password) {
        throw Error('参数不完整')
      }
      const user = new User()
      Object.assign(user, { ...data, password: md5(data.password) })
      User.save(user)
      ctx.body = { msg: 'ok' }
    } catch (error) {
      ctx.body = { msg: error.toString() }
    }
  }
  @Get('/user/:id')
  async getUserById(ctx: Context) {
    try {
      const user = new User()
      Object.assign(user, ctx.params)
      const result = await User.findOne(user)
      ctx.body = result
    } catch (error) {
      ctx.body = { msg: error.toString() }
    }
  }
}
