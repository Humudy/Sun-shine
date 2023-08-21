// IMPORT DEPENDENCIES
import { lazy } from "react"


// ROUTES
const routes = [

    // HOME
    {
        path: '/',
        component: lazy(() => import('../pages/home/home'))
    },

    // ABOUT
    {
        path:"/about",
        component:lazy(() =>import("../pages/about/about"))
    }
]

// EXPORT
export default routes