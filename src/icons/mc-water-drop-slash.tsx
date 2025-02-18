import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McWaterDropSlash = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21.71,20.29l-18-18A1,1,0,0,0,2.29,3.71l4,4a12.46,12.46,0,0,0-2,6.57A7.76,7.76,0,0,0,12,22a7.64,7.64,0,0,0,5.87-2.71l2.42,2.42a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM12,20a5.76,5.76,0,0,1-5.75-5.75A10.3,10.3,0,0,1,7.72,9.14l8.74,8.73A5.67,5.67,0,0,1,12,20ZM10.85,5.24c.45-.42.85-.75,1.15-1,1.43,1.12,5.13,4.43,5.68,8.88a1,1,0,0,0,1,.88h.12a1,1,0,0,0,.87-1.11c-.78-6.43-6.85-10.55-7.1-10.72a1,1,0,0,0-1.12,0A18.73,18.73,0,0,0,9.49,3.78a1,1,0,0,0,1.36,1.46Z'
    }));
};

export default McWaterDropSlash;