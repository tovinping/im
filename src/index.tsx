import React from 'react'
import ReactDOM from 'react-dom'
import Router from './views/Router'
import client from './utils/clientSocket'
import reportWebVitals from './reportWebVitals'
import './index.css'
import 'antd/dist/antd.css'
import './resource/scss/reset.scss'
client.init()
ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to star t measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
