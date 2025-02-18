import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McListOlAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M7,20H4v-0.1C4,19.4,4.4,19,4.9,19c1.4,0,2.6-0.9,3-2.2c0.4-1.6-0.5-3.3-2.1-3.7c-1.3-0.4-2.7,0.2-3.4,1.4c-0.3,0.5-0.1,1.1,0.4,1.4c0.5,0.3,1.1,0.1,1.4-0.4c0,0,0,0,0,0c0.3-0.5,0.9-0.6,1.4-0.3c0.1,0.1,0.2,0.1,0.2,0.2C6,15.7,6,16,6,16.3c-0.2,0.4-0.6,0.7-1,0.7C3.3,17,2,18.3,2,19.9V21c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1S7.6,20,7,20z M7,9H6V3c0-0.6-0.4-1-1-1S4,2.4,4,3v1H3C2.4,4,2,4.4,2,5s0.4,1,1,1h1v3H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h4c0.6,0,1-0.4,1-1S7.6,9,7,9z M11,6h10c0.6,0,1-0.4,1-1s-0.4-1-1-1H11c-0.6,0-1,0.4-1,1S10.4,6,11,6z M21,20H11c-0.6,0-1,0.4-1,1s0.4,1,1,1h10c0.6,0,1-0.4,1-1S21.6,20,21,20z M21,9H11c-0.6,0-1,0.4-1,1s0.4,1,1,1h10c0.6,0,1-0.4,1-1S21.6,9,21,9z M21,15H11c-0.6,0-1,0.4-1,1s0.4,1,1,1h10c0.6,0,1-0.4,1-1S21.6,15,21,15z'
    }));
};

export default McListOlAlt;