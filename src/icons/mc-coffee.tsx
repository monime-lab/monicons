import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCoffee = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M9,17h4a5,5,0,0,0,5-5V11h1a3,3,0,0,0,0-6H18V4a1,1,0,0,0-1-1H5A1,1,0,0,0,4,4v8A5,5,0,0,0,9,17ZM18,7h1a1,1,0,0,1,0,2H18ZM6,5H16v7a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3ZM21,19H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z'
    }));
};

export default McCoffee;