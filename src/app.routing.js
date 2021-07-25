/**
 * 
 * Register your routes here
 * 
 */

import Home from './components/home/home';
import Error404 from './components/error-404/error-404'

const router = async (route) => {

    let content = document.getElementById("root");

    content.innerHTML = "";

    switch(route) {
        case "#/home":
            return content.append(Home());            
        default:
            return content.append(Error404());
    }

};

export { router };