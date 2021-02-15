import { Context } from 'koa'
import { User } from '../models/User'
import { Get, Post } from '../routes'

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
      console.log(data)
      if (!data?.chinesName || !data?.pinyinName) {
        throw Error('参数不完整')
      }
      const user = new User()
      Object.assign(user, data)
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
