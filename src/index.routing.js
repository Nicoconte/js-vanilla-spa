import { router } from './lib/routing';

import Home from './components/home/home';
import Error404 from './components/error-404/error-404'

const initRoutes = () => {

    router.register(
        {
            path: "home",
            component: Home()
        }
    )

    router.register(
        {
            path: "home2",
            component: Home()
        }
    )    

    router.register(
        {
            path: "not-found",
            component: Error404()
        }        
    )
}

export default initRoutes;