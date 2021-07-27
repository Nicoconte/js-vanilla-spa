import Events  from './events';

class Component {

    constructor(tagName, view, styles) {

        this.tagName = tagName;
        this.view = view;
        this.styles = styles;

        this.html = null;
        this.events = null;

        this._createComponent();
        this._attachEvents();
        this._applyStyles();
        
    }


    _createComponent() {
        this.html = document.createElement(this.tagName);
        this.html.innerHTML = this.view;
        
        return this.html;
    }

    _attachEvents() {
        this.events = new Events(this.html);        
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


    /**
     * 
     * Render the component
     * 
     * @returns 
     */
    render() {
        if (!this.html) {
            throw 'Cannot render undefined or null';
        }

        return this.html;
    }
}

export default Component;