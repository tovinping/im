import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Router from './views/Router'
import reportWebVitals from './reportWebVitals'
import './resource/scss/reset.scss'

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
