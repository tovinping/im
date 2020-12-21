import React, { useState, useMemo } from 'react'
import { Button, Input, message } from 'antd'
import { useHistory } from 'react-router'
import { login } from '../../api/user'
import style from './login.module.scss'
// UI参照 http://kfqtj.zcom.gov.cn/index.htm
window.addEventListener('unload', () => {
  console.log('page will unload')
  alert('aaa')
})
export default function Login() {
  const history = useHistory()
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const stopLogin = useMemo(() => {
    return !Boolean(account.trim() && password.trim())
  }, [account, password])
  function doLogin() {
    login({ account, password })
      .then((res) => {
        history.push('/chat')
      })
      .catch((err) => {
        message.error(err.message, 1)
      })
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
              <Input
                placeholder={'请输入用户名'}
                onChange={(evt) => setAccount(evt.target.value)}
              />
            </div>
          </div>
          <div className={style.password}>
            <div>密&nbsp;&nbsp;&nbsp;&nbsp;码</div>
            <div className={style.input}>
              <Input
                placeholder={'请输入密码'}
                type={'password'}
                onChange={(evt) => setPassword(evt.target.value)}
              />
            </div>
          </div>
          <div className={style.loginBtn}>
            <Button
              type="primary"
              disabled={stopLogin}
              block
              size="large"
              onClick={doLogin}
            >
              登录
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
