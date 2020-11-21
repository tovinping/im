import React from 'react'
import classnames from 'classnames'
import style from './Styles/input.module.scss'
interface IProps {
  placeholder?: string
  className?: string
  defaultValue?: string | number
  value?: string | number
  type?: 'text' | 'password'
}
export default function Input({
  placeholder,
  className,
  defaultValue,
  value,
  type,
}: IProps) {
  return (
    <input
      className={classnames(style.inputContainer, className)}
      type={type}
    />
  )
}
