import { message } from 'antd'
import { baseUrl } from '../config'
import { IAnyObj } from '../interface'
export async function get<T>(uri: string, payload: IAnyObj): Promise<T | null> {
  let query = '?'
  for (const key in payload) {
    const value = payload[key]
    query += `${key}=${value}&`
  }
  try {
    const response = await fetch(baseUrl + uri + query, { method: 'get' })
    return await response.json()
  } catch (error) {
    message.error('请求失败')
    return null
  }
}
