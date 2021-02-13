import { Context } from 'koa'
import { getManager } from 'typeorm'
import { User } from '../models/User'

export async function getUsers(ctx: Context) {
  console.log('start')
  const users = await User.find()
  console.log('end', users)
  ctx.body = users
}
export async function addUser(ctx: Context) {
  const user = new User()
  user.chinesName = 'ccc'
  user.pinyinName = 'ppp'
  User.save(user)
  ctx.body = { msg: 'ok' }
}