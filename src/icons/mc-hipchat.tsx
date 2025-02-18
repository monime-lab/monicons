import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McHipchat = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M17.5,13.9c0-0.2-0.2-0.4-0.4-0.4c-0.1,0-0.2,0-0.3,0.1c-1.3,1.1-3,1.7-4.8,1.7h0c-1.7,0-3.4-0.6-4.8-1.7c-0.1-0.1-0.2-0.1-0.3-0.1c-0.2,0-0.4,0.2-0.4,0.4c0,0,0,0,0,0c0,0.2,0.1,0.3,0.2,0.5C8,16,10,16.9,12,16.8h0c2,0.1,3.9-0.8,5.2-2.4C17.4,14.2,17.4,14.1,17.5,13.9z M20.2,20.8c-0.8-0.4-1.4-1.2-1.7-2c-0.1-0.2,0-0.3,0.1-0.4c2.1-1.5,3.3-3.9,3.3-6.4c0-4.8-4.5-8.6-10-8.6c-5.5,0-10,3.9-10,8.6c0,4.8,4.5,8.6,10,8.6c0.7,0,1.4-0.1,2.1-0.2c0.1,0,0.3,0,0.4,0.1c1.6,0.9,3.4,1.5,5.2,1.5c0.4,0.1,0.7-0.2,0.8-0.6c0,0,0-0.1,0-0.1C20.5,21.1,20.4,20.9,20.2,20.8z M17.5,20L17.5,20c0,0,0,0.1,0,0.1c0,0.1-0.1,0.1-0.1,0.1c-1.1-0.3-2-0.8-2.9-1.5c-0.1-0.1-0.3-0.1-0.5-0.1c-0.7,0.2-1.4,0.2-2.1,0.2c-4.6,0-8.3-3.1-8.3-6.9c0-3.8,3.7-6.9,8.3-6.9c4.6,0,8.3,3.1,8.3,6.9c-0.1,2.3-1.4,4.4-3.4,5.5c-0.2,0.1-0.3,0.3-0.3,0.4C16.8,18.7,17.1,19.4,17.5,20z'
    }));
};

export default McHipchat;