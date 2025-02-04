import { createBrowserRouter } from "react-router";
import AddRecipe from "./components/Recipes/AddRecipe";
import About from "./components/About";
import AllRecipes from "./components/Recipes/AllRecipes";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import UpdateDetails from "./components/User/UpdateDetails";
export const router = createBrowserRouter([
    {
        path: '/',
        element:
            <AppLayout /> ,
        children: [
            { path: 'about', element: <About /> },
            { path: 'home', element: <Home /> },
            { path: '/', element: <Home /> },
            { path: 'add', element: <AddRecipe /> },
            { path: 'update', element: <UpdateDetails /> },
            { path: 'all-recipes/:id?', element: <AllRecipes /> },

        ]
    }
]);