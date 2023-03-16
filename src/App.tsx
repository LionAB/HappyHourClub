import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import { AppBar, Box } from '@mui/material'
import MiniDrawer from './Components/AppBar'

function App() {

  return (
    <div className="App">
      <Box>
        <MiniDrawer/>
        <Outlet/>
      </Box>
    </div>
  )
}

export default App
