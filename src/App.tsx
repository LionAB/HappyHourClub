import './App.css'
import UserContext from './hooks/Context/UserContext'
import { UserProvider } from './providers/UserProvider'
import AppRouter from './Router/AppRouter'

function App() {

  return (
    <div className="App">
      <UserProvider>
        <AppRouter/>
      </UserProvider>
    </div>
  )
}

export default App
