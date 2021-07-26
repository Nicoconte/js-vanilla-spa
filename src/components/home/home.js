import Component from "../../lib/component";

import view from './home.html';
import styles from './home.css';

const Home = () => {

    const homeComponent = new Component(view, styles);

    homeComponent.html.querySelector("#btnClick").addEventListener('click', () => {
        alert("Hola!");
    })

    return homeComponent.render();
};

export default Home;