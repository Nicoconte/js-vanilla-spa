

class Component {

    constructor(view, styles) {

        this.view = view;
        this.styles = styles;

        this.html = null;

        this._createComponent()
        this._applyStyles();

    }

    _createComponent() {
        this.html = document.createElement("div");
        this.html.innerHTML = this.view;

        return this.html;
    }

    /**
     * 
     * Property references 
     * https://www.w3schools.com/jsref/dom_obj_style.asp
     * 
     */
    _applyStyles() {
        const tagStyle = document.createElement('STYLE');
        tagStyle.innerText = this.styles;
        this.html.appendChild(tagStyle);
    }

    render() {
        if (!this.html) {
            throw 'Cannot render undefined or null';
        }

        return this.html;
    }
}

export default Component;