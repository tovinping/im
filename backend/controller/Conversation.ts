import { Context } from 'koa'
import * as md5 from 'md5'
import { Conversation } from '../models/Conversation'
import { Get, Post } from '../router'

export default class UserController {
  @Get('/conversation/list')
  async getConversations(ctx: Context) {
    try {
      if (!ctx.query.account) {
        ctx.error('我说没有数据你信吗?')
      }
      const users = await Conversation.find({where: {owner: ctx.query.account}})
      ctx.success(users)
    } catch (error) {
      ctx.error(error.toString())
    }
  }
  @Post('/conversation/add')
  async addConversation(ctx: Context) {
    try {
      const data = ctx.request.body
      if (!data.account || !data.password) {
        throw Error('参数不完整')
      }
      const user = new Conversation()
      Object.assign(user, { ...data, password: md5(data.password) })
      await Conversation.save(user)
      ctx.success()
    } catch (error) {
      ctx.error(error.toString())
    }
  }
  @Post('/conversation/remove')
  async removeConversation(ctx: Context) {
    try {
      ctx.success({})
    } catch (error) {
      ctx.error(error.toString())
    }
  }
  @Post('/conversation/update')
  async update(ctx: Context) {
    try {
      ctx.success({})
    } catch (error) {
      ctx.error(error.toString())
    }
  }
}
