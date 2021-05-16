import React from 'react'
import classnames from 'classnames'
import {useRootState} from 'src/store'
import Avatar from '../Avatar'
import style from './MemberItem.module.scss'
interface IProps {
  account: string;
  classNames?: string
}
export default function MemberItem({account, classNames}: IProps) {
  const userInfo = useRootState(state => state.user[account])
  const memberName = userInfo?.chinesName || ''
  return <li className={classnames(style.memberItem, classNames)}>
    <Avatar id={account} type={'0'} size={'small'} />
    <div className={style.memberName} title={memberName}>{memberName}</div>
  </li>
}