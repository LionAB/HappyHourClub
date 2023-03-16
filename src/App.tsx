import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import { AppBar } from '@mui/material'
import MiniDrawer from './Components/AppBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <MiniDrawer/>
      <Outlet/>
    </div>
  )
}

export default App
