import React from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
import style from './login.module.scss'
// 参照 http://kfqtj.zcom.gov.cn/index.htm
export default function Login() {
  return (
    <div className={style.loginContainer}>
      <div>
        <div className={style.title}>IM登陆</div>
        <div className={style.inputPanel}>
          <h1>用户登录</h1>
          <div className={style.account}>
            <div>用户名</div>
            <div className={style.input}>
              <Input />
            </div>
          </div>
          <div className={style.password}>
            <div>密&nbsp;&nbsp;&nbsp;&nbsp;码</div>
            <div className={style.input}>
              <Input type={'password'}/>
            </div>
          </div>
          <div>
            <Button className={style.button} text={'登录'} />
          </div>
        </div>
      </div>
    </div>
  )
}
