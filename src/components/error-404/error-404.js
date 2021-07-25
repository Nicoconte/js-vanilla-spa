import view from './error-404.html'

const Error404 = () => {
    const divElement = document.createElement("div");
    divElement.innerHTML = view;

    return divElement;
};

export default Error404