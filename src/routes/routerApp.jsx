import App from '../App'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
 
export let RouterApp = [
    {
        path:"/",
        element:<App />,
    },
    {
        path:"/login",
        element:<Login />,
    },
    {
        path:"/register",
        element:<Register />,
    },
    {
        path:"/Dashboard",
        element:<Dashboard />,
    }
]