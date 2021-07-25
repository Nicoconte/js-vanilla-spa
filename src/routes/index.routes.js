/**
 * 
 * Register your routes here
 * 
 */

import { pages } from '../components/index.components'

const router = async (route) => {

    let content = document.getElementById("root");

    content.innerHTML = "";

    switch(route) {
        case "#/":
            return content.append(pages.home());
        default:
            return content.append(pages.error404());
    }

};

export { router };