import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McBorderRight = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M4.5,7a1,1,0,1,0,1,1A1,1,0,0,0,4.5,7Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,4.5,3Zm4,16a1,1,0,1,0,1,1A1,1,0,0,0,8.5,19Zm-4,0a1,1,0,1,0,1,1A1,1,0,0,0,4.5,19Zm4-8a1,1,0,1,0,1,1A1,1,0,0,0,8.5,11Zm0-8a1,1,0,1,0,1,1A1,1,0,0,0,8.5,3Zm-4,8a1,1,0,1,0,1,1A1,1,0,0,0,4.5,11Zm0,4a1,1,0,1,0,1,1A1,1,0,0,0,4.5,15Zm12-12a1,1,0,1,0,1,1A1,1,0,0,0,16.5,3Zm0,8a1,1,0,1,0,1,1A1,1,0,0,0,16.5,11Zm-4,8a1,1,0,1,0,1,1A1,1,0,0,0,12.5,19Zm0-16a1,1,0,1,0,1,1A1,1,0,0,0,12.5,3Zm8,0a1,1,0,0,0-1,1V20a1,1,0,0,0,2,0V4A1,1,0,0,0,20.5,3Zm-4,16a1,1,0,1,0,1,1A1,1,0,0,0,16.5,19Zm-4-12a1,1,0,1,0,1,1A1,1,0,0,0,12.5,7Zm0,8a1,1,0,1,0,1,1A1,1,0,0,0,12.5,15Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,12.5,11Z'
    }));
};

export default McBorderRight;