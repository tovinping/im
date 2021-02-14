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
    const user = new User()
    user.chinesName = 'ccc'
    user.pinyinName = 'ppp'
    User.save(user)
    ctx.body = { msg: 'ok' }
  }
  @Get('/user/:id')
  async getUserById(ctx: Context){
    const user = new User()
    user.id = 1
    const result = await User.findOne(user)
    ctx.body = result
  }
}
