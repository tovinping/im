import React from 'react'
import Icon from 'src/components/Icon'
import style from './index.module.scss'
export default function TopBar() {
  return (
    <div className={style.topBar}>
      <span className={style.title}>IM</span>
      <div className={style.options}>
        <div onClick={() => window.NodeBridge.miniSize()}>
          <Icon type={'MinSize'} width={12} height={12} />
        </div>
        <div onClick={() => window.NodeBridge.maxSize()}>
          <Icon type={'MaxSize'} width={12} height={12} />
        </div>
        <div onClick={() => window.NodeBridge.closeWindow()}>
          <Icon type={'Close'} width={12} height={12} />
        </div>
      </div>
    </div>
  )
}
