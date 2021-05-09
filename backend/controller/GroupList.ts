import { Context } from 'koa'
import { In } from 'typeorm'
import { GroupList } from '../models/GroupList'
import { GroupInfo } from '../models/GroupInfo'
import { Get, Post } from '../router'
import { generateGroupId } from '../utils'

export default class GroupListController {
  @Get('/groupList/list')
  async getGroups(ctx: KoaCtx) {
    try {
      const { account } = ctx.query
      const groupList = await GroupList.find({ where: { account } })
      const groupIds = groupList.map(item => item.groupId)
      const groupInfoList = await GroupInfo.find({
        where: { groupId: In(groupIds) },
      })
      ctx.success(groupInfoList)
    } catch (error) {
      ctx.error(error.toString())
    }
  }
  @Post('/groupList/add')
  async addGroup(ctx: Context) {
    try {
      const data = ctx.request.body
      console.log(data)
      if (!data.groupName || !data.memberList) {
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
