import React from 'react'
import {useRootState} from 'src/store'
import Avatar from '../Avatar'
import style from './MemberItem.module.scss'
interface IProps {
  account: string;
}
export default function MemberItem({account}: IProps) {
  const userInfo = useRootState(state => state.user[account])
  const name = userInfo?.chinesName || ''
  const showName = name.length > 3 ? name.slice(0,3) + '...' : name 
  return <li className={style.memberItem}>
    <Avatar id={account} type={'0'} />
    <span title={name}>{showName}</span>
  </li>
}