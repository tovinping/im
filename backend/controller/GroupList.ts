import { Context } from 'koa'
import { GroupList } from '../models/GroupList'
import { Get, Post } from '../router'
import {generateGroupId} from '../utils'

export default class UserController {
  @Get('/groupList/userId')
  async getGroups(ctx: Context) {
    try {
      const users = await GroupList.find()
      ctx.success(users)
    } catch (error) {
      ctx.error(error.toString())
    }
  }
  @Post('/groupList/add')
  async addGroup(ctx: Context) {
    try {
      const data = ctx.request.body
      console.log(data)
      if (!data.groupName || data.memberList) {
        throw Error('参数不完整')
      }
      const user = new GroupList()
      const groupId = generateGroupId()
      Object.assign(user, { groupName: data.groupName, groupId })
      await GroupList.save(user)
      ctx.success()
    } catch (error) {
      ctx.error(error.toString())
    }
  }
  @Post('/groupList/remove')
  async removeGroup(ctx: Context) {
    try {
      ctx.success({})
    } catch (error) {
      ctx.error(error.toString())
    }
  }
}
