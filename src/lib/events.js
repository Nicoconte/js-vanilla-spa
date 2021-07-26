class Events {

    onClick(htmlElement, id, callback) {
        htmlElement.querySelector(id).addEventListener('click', (e) => {
            callback()
        });
    }

}

export default Events;