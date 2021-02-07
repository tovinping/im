import React from 'react'
import Dialog from './Dialog'
import DialogItem from './DialogItem'
import './index.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dialog content={<DialogItem />} />
      </header>
    </div>
  )
}

export default App
