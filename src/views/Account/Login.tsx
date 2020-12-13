import React from 'react'
import {Button, Input} from 'antd'
import {useHistory} from 'react-router'
import style from './login.module.scss'
// UI参照 http://kfqtj.zcom.gov.cn/index.htm
window.addEventListener('unload', () => {
  console.log('page will unload')
  alert('aaa')
})
export default function Login() {
  const history = useHistory()
  function doLogin() {
    history.push('/chat')
  }
  return (
    <div className={style.loginContainer}>
      <div>
        <div className={style.title}>IM登陆</div>
        <div className={style.inputPanel}>
          <h1>用户登录</h1>
          <div className={style.account}>
            <div>用户名</div>
            <div className={style.input}>
              <Input placeholder={'请输入用户名'} />
            </div>
          </div>
          <div className={style.password}>
            <div>密&nbsp;&nbsp;&nbsp;&nbsp;码</div>
            <div className={style.input}>
              <Input placeholder={'请输入密码'} type={'password'}/>
            </div>
          </div>
          <div className={style.loginBtn}>
            <Button type="primary" block size="large" onClick={doLogin}>登录</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
