class Router {

    constructor() {
        this.routes = []
        this.content = document.getElementById("root")
    }

    _addHashtag(path) {
        
        if (path === ""){
            path = "#";
            return path;
        }

        if (path.include("#")) {
            return path;
            
        } else {
            path = "#/" + path;
            return path;
        }
    }

    /**
     * 
     * @param {Object} route {path: "", component:""} 
     * @returns 
     */
    register(route) {
        //Si la ruta existe, no la registramos 
        if (this.routes.some(r => r.path == route.path)) {
            return;
        }   

        route.path = this._addHashtag(route.path);

        this.routes.push(route)
    }

    changePage(path) {
        this.content.innerHTML = "";

        this.routes.forEach(route => {

            console.log(path)

            // En caso de que la ruta no coincida con las registradas, retornamos el componente not-found
            if (this.routes.some(route => path === route.path) && path === route.path) {
                return this.content.append(route.component);
            }
        })
    }

}

const router = new Router()

export {
    router
};