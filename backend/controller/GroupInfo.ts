import { getManager } from 'typeorm'
import { Group } from '../models/GroupInfo'
import { GroupMember } from '../models/GroupMember'
import { Get, Post } from '../router'
import { generateGroupId } from '../utils'

export default class UserController {
  @Get('/group/list')
  async getGroups(ctx: KoaCtx) {
    try {
      if (!ctx.query.account) {
        ctx.error('我说没有数据你信吗?')
      }
      const groups = await Group.find()
      ctx.success(groups)
    } catch (error) {
      ctx.error(error.toString())
    }
  }
  @Post('/group/add')
  async addGroup(ctx: KoaCtx) {
    try {
      const data = ctx.request.body
      console.log(data)
      if (!data.groupName || !data?.memberList?.length) {
        throw Error('参数不完整')
      }
      const groupId = generateGroupId()
      const owner = ctx.myId
      const group = new Group()
      Object.assign(group, { name: data.groupName, groupId, owner })
      // const groupMember = new GroupMember()
      // Object.assign(groupMember, {test: 'aaa'})
      const members = data.memberList.map(item => {
        return {
          account: item,
          groupId,
        }
      })
      // 创建群的时候需要同时添加群成员-事务操作
      await getManager().transaction(async transactionalEntityManager => {
        // await transactionalEntityManager.save(group)
        // await transactionalEntityManager.save(members)
        await Group.save(group)
        await GroupMember.save(members)
      })
      ctx.success()
    } catch (error) {
      ctx.error(error.toString())
    }
  }
  @Get('/group/byId')
  async getGroupInfoById(ctx: KoaCtx) {
    try {
      const user = new Group()
      Object.assign(user, ctx.params)
      const result = await Group.findOne(user)
      ctx.success(result)
    } catch (error) {
      ctx.error(error.toString())
    }
  }
  @Post('/group/remove')
  async removeGroup(ctx: KoaCtx) {
    try {
      ctx.success({})
    } catch (error) {
      ctx.error(error.toString())
    }
  }
  @Post('/group/update')
  async updateGroup(ctx: KoaCtx) {
    try {
      ctx.success({})
    } catch (error) {
      ctx.error(error.toString())
    }
  }
}
