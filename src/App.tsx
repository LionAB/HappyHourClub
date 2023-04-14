import './App.css'
import UserContext from './hooks/Context/UserContext'
import { DrinkProvider } from './providers/DrinkProvider'
import { UserProvider } from './providers/UserProvider'
import { RecipeProvider } from './providers/RecipeProvider'
import AppRouter from './Router/AppRouter'

function App() {
  return (
    <div className="App">
      <UserProvider>
        <DrinkProvider>
          <RecipeProvider>
            <AppRouter/>
          </RecipeProvider>
        </DrinkProvider>
      </UserProvider>
    </div>
  )
}

export default App
