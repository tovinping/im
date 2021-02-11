import React, { useState } from 'react'
import { Button, Input, message, Spin } from 'antd'
import { useHistory } from 'react-router'
import { globalDispatch } from 'src/store'
import { login } from 'src/api/user'
import TopBar from 'src/components/TopBar'
import socketClient from 'src/utils/clientSocket'
import style from './login.module.scss'
window.addEventListener('unload', () => {
  console.log('page will unload')
  alert('aaa')
})
export default function Login() {
  const history = useHistory()
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  async function doLogin() {
    if (!account.trim() || !password.trim()) {
      message.error('请输入用户名和密码', 1)
      return
    }
    setLoading(true)
    const data = await login({ account, password })
    setLoading(false)
    if (data) {
      console.log(data)
      globalDispatch({ type: 'updateGlobal', payload: { isLogin: true, account } })
      socketClient.init(account)
      history.push('/chat')
    }
  }
  return (
    <Spin spinning={loading} tip={'登录中...'} wrapperClassName={style.spinWrap}>
      <div className={style.loginContainer}>
        <TopBar />
        <h1 className={style.title}>帐号登录</h1>
        <h2 className={style.subTitle}>Development zone</h2>
        <div className={style.inputPanel}>
          <h1>用户登录</h1>
          <div className={style.account}>
            <div>用户名</div>
            <div className={style.input}>
              <Input placeholder={'请输入用户名'} onChange={(evt) => setAccount(evt.target.value)} />
            </div>
          </div>
          <div className={style.password}>
            <div>密&nbsp;&nbsp;&nbsp;&nbsp;码</div>
            <div className={style.input}>
              <Input placeholder={'请输入密码'} type={'password'} onChange={(evt) => setPassword(evt.target.value)} />
            </div>
          </div>
          <div className={style.loginBtn}>
            <Button type="primary" block size="large" onClick={doLogin}>
              登录
            </Button>
          </div>
        </div>
      </div>
    </Spin>
  )
}
