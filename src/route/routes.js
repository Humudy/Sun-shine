// IMPORT DEPENDENCIES
import { lazy } from "react"


// ROUTES
const routes = [

    // HOME
    {
        path: '/',
        component: lazy(() => import('../pages/home/home'))
    },

]

// EXPORT
export default routes