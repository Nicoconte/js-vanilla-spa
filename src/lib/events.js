class Events {

    constructor(htmlElement) {
        this.htmlElement = htmlElement
    }

    onClick(id, callback) {
        this.htmlElement.querySelector(id).addEventListener('click', () => {
            callback();
        })
    }

}

export default Events;