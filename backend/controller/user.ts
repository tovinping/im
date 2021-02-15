import { Context } from 'koa'
import * as md5 from 'md5'
import { User } from '../models/User'
import { Get, Post } from '../router'

export default class UserController {
  @Get('/users')
  async getUsers(ctx: Context) {
    try {
      const users = await User.find()
      ctx.success(users)
    } catch (error) {
      ctx.error(error.toString())
    }
  }
  @Post('/user')
  async addUser(ctx: Context) {
    try {
      const data = ctx.request.body
      if (!data.account || !data.password) {
        throw Error('参数不完整')
      }
      const user = new User()
      Object.assign(user, { ...data, password: md5(data.password) })
      await User.save(user)
      ctx.success()
    } catch (error) {
      ctx.error(error.toString())
    }
  }
  @Get('/user/:id')
  async getUserById(ctx: Context) {
    try {
      const user = new User()
      Object.assign(user, ctx.params)
      const result = await User.findOne(user)
      ctx.success(result)
    } catch (error) {
      ctx.error(error.toString())
    }
  }
  @Post('/user/delete')
  async removeUser(ctx: Context) {
    try {
      ctx.success({})
    } catch (error) {
      ctx.error(error.toString())
    }
  }
  @Post('/user/update')
  async update(ctx: Context) {
    try {
      ctx.success({})
    } catch (error) {
      ctx.error(error.toString())
    }
  }
}
