import './App.css'
import UserContext from './hooks/Context/UserContext'
import { DrinkProvider } from './providers/DrinkProvider'
import { UserProvider } from './providers/UserProvider'
import { RecipeProvider } from './providers/RecipeProvider'
import AppRouter from './Router/AppRouter'
import { ColorModeContextProvider } from './theme/ColorModeContext'

function App(){
  return (
    <div className="App">
      <ColorModeContextProvider>
      <UserProvider>
        <DrinkProvider>
          <RecipeProvider>
            <AppRouter/>
          </RecipeProvider>
        </DrinkProvider>
      </UserProvider> 
      </ColorModeContextProvider>
    </div>
  )
}

export default App
