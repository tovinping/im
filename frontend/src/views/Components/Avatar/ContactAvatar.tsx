import React from 'react'
import defaultAvatar from 'src/resource/images/avatar1.jpg'
import style from './ContactAvatar.module.scss'
export type ISize = 'small' | 'normal' | 'large'
export default function ContactAvatar() {
  return <img className={style.contactAvatar} src={defaultAvatar} alt="" />
}
