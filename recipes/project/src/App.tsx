
import './App.css'
import { router } from './Router'
import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import store from './store/store'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RecipeTypeSelector from './components/Recipes/RecipeTypeSelector'
import userReducer, { ActionType, initialUser, UserType } from './userReducer'
import { createContext, Dispatch, useReducer } from 'react'
export const UserContext = createContext<[
   UserType,
   Dispatch<ActionType>
]>([
   {} as UserType,
   () => null
])

function App() {

  const [user, userDispatch] = useReducer(userReducer, initialUser)

  const theme = createTheme({
    palette: {
      primary: {
        main: '#f9c4b5',
        dark: '#d85b5b',
      },
      secondary: {
        main: '#bdd0c8',
        dark: '#92afae',
      },
    },
  });




  return (
    <>
<UserContext value={[user, userDispatch]}>
      <ThemeProvider theme={theme}>

        <Provider store={store}>

          <RouterProvider router={router} />

        </Provider>

      </ThemeProvider>
      </UserContext>

    </>
  )
}
export default App

