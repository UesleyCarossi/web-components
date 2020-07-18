class Tooltip extends HTMLElement {
    constructor() {
        super();
        /**
         * Controller vars
         */
        this._tooltipContainer;

        /**
         * Attributes
         */
        this._tooltipText;
    }

    /**
     * On rendered
     */
    connectedCallback() {
        /**
         * Create elements
         */
        const tooltipIcon = document.createElement('span');

        /**
         * Element properties
         */
        tooltipIcon.textContent = ' (?)';

        /**
         * Listeners
         */
        tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));

        /**
         * Apply elements on DOM
         */
        this.appendChild(tooltipIcon);
    }

    _showTooltip() {
        /**
         * Get attributes
         */
        this._tooltipText = this.getAttribute('text') || 'tooltip';

        /**
         * Create elements
         */
        this._tooltipContainer = document.createElement('div');

        /**
         * Apply attributes
         */
        this._tooltipContainer.textContent = this._tooltipText;


        /**
         * Styling
         */
        this._tooltipContainer.style.position = 'absolute';
        this._tooltipContainer.style.background = 'rgb(66, 135, 245)';
        this._tooltipContainer.style.color = 'rgb(246, 246, 246)';
        this._tooltipContainer.style.borderRadius = '5px';
        this._tooltipContainer.style.padding = '0 5px';


        /**
         * Apply elements on DOM
         */
        this.appendChild(this._tooltipContainer);
    }

    _hideTooltip() {
        /**
         * Remove elements of DOM
         */
        this.removeChild(this._tooltipContainer);
    }
}

/**
 * Define a custom HTML component
 */
customElements.define('pitty-tooltip', Tooltip);
