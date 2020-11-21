import React from 'react'
import classnames from 'classnames'
import style from './Styles/button.module.scss'
interface IProps {
  text: string
  className?: string
}
export default function Button({ text, className }: IProps) {
  return <div className={classnames(style.buttonContainer, className)}>{text}</div>
}
