import React from 'react'
import ReactDOM from 'react-dom'
import { FoxbelMusicApp } from './components/FoxbelMusicApp'
import './css/style.css'
import './css/hamburgers.css'

const App = () => {
  return (
    <div>
      <FoxbelMusicApp />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
