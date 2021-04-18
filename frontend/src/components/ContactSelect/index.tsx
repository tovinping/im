import React, { useMemo } from 'react'
import { useRootState } from 'src/store'
import style from './index.module.scss'
interface IProps {
  selected?: string[]
  maxNum: number
  callback(data?: any[]): void
}
export default function SelectContact(props: IProps) {
  const userMap = useRootState(state => state.user)
  const contactList = useMemo(() => {
    const list = []
    for (const key in userMap) {
      const contactInfo = userMap[key]
      if (contactInfo) {
        list.push(contactInfo)
      }
    }
    return list
  }, [userMap])
  return (
    <ul className={style.contactSelect}>
      {contactList.map(item => (
        <li key={item.account} onClick={() => props.callback([item])}>{item.chinesName}</li>
      ))}
    </ul>
  )
}
