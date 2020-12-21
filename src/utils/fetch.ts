import { baseUrl } from '../config'
import { IAnyObj, IBaseRes } from '../interface'
export function get<T>(uri: string, data: IAnyObj) {
  let query = '?'
  for (const key in data) {
    const value = data[key]
    query += `${key}=${value}&`
  }
  return fetch(baseUrl + uri + query, { method: 'get' }).then((res) => {
    return res
      .json()
      .then((data: IBaseRes<T>) => {
        if (data.code === 0) return data
        throw new Error(data.msg)
      })
      .catch((err) => {
        throw err
      })
  })
}
