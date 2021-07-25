import view from "./home.html"

const Home = () => {
    const divElement = document.createElement("div");
    divElement.innerHTML = view;

    const btnClick = divElement.querySelector("#btnClick");
    btnClick.addEventListener("click", () => {
        alert("clicked");
    });

    return divElement;
};

export default Home;