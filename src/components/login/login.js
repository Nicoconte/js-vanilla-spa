import Component from "../../lib/component";

import view from './login.html';
import styles from './login.css';


class LoginComponent extends Component {

    constructor(tagName, view, styles) {
        super(tagName, view, styles);
    }

}


export default new LoginComponent('app-login', view, styles).render();