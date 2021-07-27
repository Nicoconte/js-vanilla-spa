import Component from "../../lib/component";

import view from './home.html';
import styles from './home.css';

class HomeComponent extends Component {

    constructor(tagName, view, styles) {
        
        super(tagName, view, styles);

        this.login();

        this.test();
    }

    test() {
        this.events.onClick("#btnClick", () => {
            alert("Test");
        })
    }

    login() {
        this.events.onClick("#login-btn", () => {
            alert("Login test");
        })
    }
}

export default new HomeComponent('app-home', view, styles).render();