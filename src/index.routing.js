import { router } from './lib/routing';

import HomeComponent from './components/home/home';
import DashboardComponent from './components/dashboard/dashboard';
import LoginComponent from './components/login/login';

const initRoutes = () => {

    router.register([
        { path: "home", component: HomeComponent },
        { path: "login", component: LoginComponent },
        { path: "dashboard", component: DashboardComponent }        
    ])

}

export default initRoutes;