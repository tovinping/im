import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil'

import Router from './views/Router'
import store from './store'
import reportWebVitals from './reportWebVitals'
import './index.css'
import 'antd/dist/antd.css'
import './resource/scss/reset.scss'

// ReactDOM.render(
//   <Provider store={store}>
//     <Router />
//   </Provider>,
//   document.getElementById('root')
// )

ReactDOM.render(
  <RecoilRoot>
    <Router />
  </RecoilRoot>,
  document.getElementById('root')
)

// If you want to star t measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
