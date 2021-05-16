import React from 'react'
import { Empty } from 'antd'
import { RightOutlined } from '@ant-design/icons';
import { useRootState } from 'src/store'
import style from './GroupNotice.module.scss'
interface IProps {
  groupId: string
}
export default function GroupNotice({ groupId }: IProps) {
  const notice = useRootState(state => state.group[groupId]?.notice)
  return (
    <div className={style.groupNotice}>
      <h2>群公告 <RightOutlined style={{color: '#999'}} /></h2>
      {notice ? <div className={style.content}>{notice}</div> : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'暂无公告'} style={{margin: '15px 0'}} />}
    </div>
  )
}
