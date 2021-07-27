import Component from "../../lib/component";

import view from './dashboard.html';
import styles from './dashboard.css';


class DashboardComponent extends Component {

    constructor(tagName, view, styles) {
        super(tagName, view, styles);
    }

}


export default new DashboardComponent('app-dashboard', view, styles).render();