import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McIcons = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M13.6,10.9C13.7,11,13.8,11,14,11h7c0.6,0,1-0.4,1-1c0-0.2,0-0.3-0.1-0.4l-3.5-7c-0.3-0.5-0.9-0.7-1.4-0.4c-0.1,0.1-0.3,0.2-0.4,0.4l-3.5,7C12.9,10,13.1,10.6,13.6,10.9z M17.5,5.2L19.4,9h-3.8L17.5,5.2z M6.5,2C4,2,2,4,2,6.5S4,11,6.5,11S11,9,11,6.5C11,4,9,2,6.5,2z M6.5,9C5.1,9,4,7.9,4,6.5S5.1,4,6.5,4S9,5.1,9,6.5C9,7.9,7.9,9,6.5,9z M10.7,13.3C10.7,13.3,10.7,13.3,10.7,13.3c-0.4-0.4-1-0.4-1.4,0c0,0,0,0,0,0l-2.8,2.8l-2.8-2.8c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l2.8,2.8l-2.8,2.8c-0.4,0.4-0.4,1,0,1.4s1,0.4,1.4,0c0,0,0,0,0,0l2.8-2.8l2.8,2.8c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4l-2.8-2.8l2.8-2.8C11.1,14.3,11.1,13.7,10.7,13.3z M21,13h-7c-0.6,0-1,0.4-1,1v7c0,0.6,0.4,1,1,1h7c0.6,0,1-0.4,1-1v-7C22,13.4,21.6,13,21,13z M20,20h-5v-5h5V20z'
    }));
};

export default McIcons;