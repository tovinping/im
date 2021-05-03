import { Context } from 'koa'
import * as md5 from 'md5'
import { CannotExecuteNotConnectedError } from 'typeorm'
import { Conversation } from '../models/Conversation'
import { Get, Post } from '../router'

export default class UserController {
  @Get('/conversation/list')
  async getConversations(ctx: KoaCtx) {
    try {
      if (!ctx.query.account) {
        ctx.error('我说没有数据你信吗?')
      }
      const conversations = await Conversation.find({where: {owner: ctx.query.account}})
      ctx.success(conversations)
    } catch (error) {
      ctx.error(error.toString())
    }
  }
  @Get('/conversation/id')
  async getConversationInfo(ctx: KoaCtx) {
    try {
      const {conversationId, owner} = ctx.query
      if (!conversationId) {
        ctx.error('参数错误')
      }
      const conversation = await Conversation.findOne({where: {owner, conversationId}})
      ctx.success(conversation)
    } catch (error) {
      ctx.error(error.toString())
    }
  }
  @Post('/conversation/add')
  async addConversation(ctx: KoaCtx) {
    try {
      const {conversationId, owner} = ctx.request.body
      if (!conversationId || !owner) {
        throw Error('参数不完整')
      }
      const conversation = Conversation.findOne({where: {conversationId, owner}})
      if (conversation) {
        ctx.success(conversation)
      } else {
        const conversation = new Conversation()
        Object.assign(conversation, { conversationId, owner})
        await Conversation.save(conversation)
        ctx.success(conversation)
      }
    } catch (error) {
      ctx.error(error.toString())
    }
  }
  @Post('/conversation/remove')
  async removeConversation(ctx: KoaCtx) {
    try {
      ctx.success({})
    } catch (error) {
      ctx.error(error.toString())
    }
  }
  @Post('/conversation/update')
  async update(ctx: KoaCtx) {
    try {
      ctx.success({})
    } catch (error) {
      ctx.error(error.toString())
    }
  }
}
