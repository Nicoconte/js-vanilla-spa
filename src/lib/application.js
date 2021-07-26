import { router } from "./routing";

import initRoutes from '../index.routing';

class Application {

    constructor() {
        initRoutes()
    }

    _init() {
         
        window.location.href = "#" + window.location.hash

        console.log("Ruta actual ", window.location.hash)

        router.changePage(window.location.hash);

        window.addEventListener("hashchange", () => {
            router.changePage(window.location.hash);
        });
    };

    start() {
        window.addEventListener("load", this._init());
    }
}

export default Application