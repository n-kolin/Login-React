
import { RouterProvider } from 'react-router'
import './App.css'
import Login from './components/Login'
import { router } from './Router'


function App() {

  return (
    <>
      {/* <Login/> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
