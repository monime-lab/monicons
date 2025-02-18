import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McBorderHorizontal = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M8,5A1,1,0,1,0,7,4,1,1,0,0,0,8,5ZM4,9A1,1,0,1,0,3,8,1,1,0,0,0,4,9Zm8,0a1,1,0,1,0-1-1A1,1,0,0,0,12,9ZM4,5A1,1,0,1,0,3,4,1,1,0,0,0,4,5ZM16,5a1,1,0,1,0-1-1A1,1,0,0,0,16,5ZM12,5a1,1,0,1,0-1-1A1,1,0,0,0,12,5Zm8,0a1,1,0,1,0-1-1A1,1,0,0,0,20,5ZM4,19a1,1,0,1,0,1,1A1,1,0,0,0,4,19Zm16,0a1,1,0,1,0,1,1A1,1,0,0,0,20,19Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,20,15Zm0-4H4a1,1,0,0,0,0,2H20a1,1,0,0,0,0-2Zm-4,8a1,1,0,1,0,1,1A1,1,0,0,0,16,19ZM4,15a1,1,0,1,0,1,1A1,1,0,0,0,4,15ZM20,7a1,1,0,1,0,1,1A1,1,0,0,0,20,7ZM8,19a1,1,0,1,0,1,1A1,1,0,0,0,8,19Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,12,19Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,12,15Z'
    }));
};

export default McBorderHorizontal;