import React from 'react'
import Dialog from './Dialog'
import './index.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link-test"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Dialog />
      </header>
    </div>
  )
}

export default App
