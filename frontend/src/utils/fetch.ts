import { message } from 'antd'
import config from '../config'
import { IAnyObj, IResBase } from '../interface'
export async function get<T = any>(uri: string, payload: IAnyObj): Promise<IResBase<T>> {
  let query = '?'
  for (const key in payload) {
    const value = payload[key]
    query += `${key}=${value}&`
  }
  try {
    const response = await fetch(config.baseUrl + uri + query, { method: 'get' })
    return await response.json()
  } catch (error) {
    message.error('请求失败')
    return { code: 1, msg: '请求失败', data: null }
  }
}

export async function post<T = any>(uri: string, payload: IAnyObj): Promise<IResBase<T>> {
  try {
    const response = await fetch(config.baseUrl + uri, { method: 'post', body: JSON.stringify(payload) })
    return await response.json()
  } catch (error) {
    message.error('请求失败')
    return { code: 1, msg: '请求失败', data: null }
  }
}
