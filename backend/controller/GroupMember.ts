import { Context } from 'koa'
import * as md5 from 'md5'
import { GroupMember } from '../models/GroupMember'
import { Get, Post } from '../router'

export default class UserController {
  @Post('/groupMember/add')
  async addGroupMember(ctx: Context) {
    try {
      const data = ctx.request.body
      if (!data.account || !data.password) {
        throw Error('参数不完整')
      }
      const user = new GroupMember()
      Object.assign(user, { ...data, password: md5(data.password) })
      await GroupMember.save(user)
      ctx.success()
    } catch (error) {
      ctx.error(error.toString())
    }
  }
  @Get('/groupMember/byGroupId')
  async getGroupMembers(ctx: Context) {
    try {
      if (!ctx.query.groupId) {
        throw Error('参数不完整')
      }
      const user = new GroupMember()
      Object.assign(user, { groupId: ctx.query.groupId })
      const result = await GroupMember.find({ where: { groupId: ctx.query.groupId } })
      ctx.success(result)
    } catch (error) {
      ctx.error(error.toString())
    }
  }
  @Post('/groupMember/remove')
  async removeGroupMember(ctx: Context) {
    try {
      ctx.success({})
    } catch (error) {
      ctx.error(error.toString())
    }
  }
  @Post('/groupMember/update')
  async updateGroupMember(ctx: Context) {
    try {
      ctx.success({})
    } catch (error) {
      ctx.error(error.toString())
    }
  }
  @Post('/groupMember/addAdmin')
  async addAdmin(ctx: Context) {
    try {
      const account = ctx.body.account
      if (account) {
        const memberInfo = await GroupMember.findOne({account})
        if (!memberInfo) {
          ctx.error('更新失败')
          return;
        }
        memberInfo.type = '1'
        const result = await GroupMember.save(memberInfo);
        ctx.success(result)
      } else {
        ctx.error('参数错误')
      }
    } catch (error) {
      
    }
  }
}
