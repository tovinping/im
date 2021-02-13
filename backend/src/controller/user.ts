import {Context} from 'koa'
import {getManager} from 'typeorm'
import {User} from '../modules/User'
export async function getUsers(ctx: Context) {
  const repository = getManager().getRepository(User)
  const users = repository.find()
  ctx.body = users
}