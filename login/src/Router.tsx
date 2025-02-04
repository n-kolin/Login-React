import { createBrowserRouter } from "react-router"
import About from "./components/About"
import AppLayout from "./components/AppLayout"
import Home from "./components/Home"
import UpdateDetails from "./components/UpdateDetails"

export const router = createBrowserRouter([
    {
        path : '/', element: <AppLayout/>,
        children:[
            {path: 'about', element: <About/>},
            {path: 'home', element: <Home/>},
            // {path: 'update', element: <UpdateDetails/>},
        ]

    }
]

)