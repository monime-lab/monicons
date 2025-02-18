import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFileContract = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M13.2,15c-0.2,0.1-0.4,0.1-0.6,0.2c-0.1-0.2-0.2-0.4-0.3-0.5c-0.8-0.7-2-0.8-3-0.2C8.5,15,8,16,8,17c0,0.5,0.5,1,1,0.9c0,0,0,0,0,0c0.5,0,1-0.5,1-1c0-0.3,0.1-0.5,0.3-0.7c0.1,0,0.2-0.1,0.3-0.1l0,0c-0.3,0.6-0.1,1.3,0.5,1.7c0.2,0.1,0.3,0.1,0.5,0.1c0.4,0,0.8-0.2,1.1-0.5c0.1-0.1,0.3-0.2,0.5-0.3c0.1,0.4,0.5,0.8,1,0.8H15c0.6,0,1-0.4,1-1c0-0.5-0.4-0.9-0.9-1c-0.1-0.2-0.1-0.3-0.3-0.5C14.5,15.1,13.8,14.9,13.2,15z M20,8.9c0-0.1,0-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.2-0.3l-6-6c-0.1-0.1-0.2-0.1-0.3-0.2c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.3-0.1c0,0,0,0-0.1,0H7C5.3,2,4,3.3,4,5v14c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3L20,8.9C20,9,20,9,20,8.9z M14,5.4L16.6,8H15c-0.6,0-1-0.4-1-1V5.4z M18,19c0,0.6-0.4,1-1,1H7c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h5v3c0,1.7,1.3,3,3,3h3V19z M9,10h1c0.6,0,1-0.4,1-1s-0.4-1-1-1H9C8.4,8,8,8.4,8,9S8.4,10,9,10z'
    }));
};

export default McFileContract;