import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McBorderInner = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M8,5A1,1,0,1,0,7,4,1,1,0,0,0,8,5ZM4,9A1,1,0,1,0,3,8,1,1,0,0,0,4,9ZM4,5A1,1,0,1,0,3,4,1,1,0,0,0,4,5ZM4,19a1,1,0,1,0,1,1A1,1,0,0,0,4,19ZM20,5a1,1,0,1,0-1-1A1,1,0,0,0,20,5Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,20,9ZM16,5a1,1,0,1,0-1-1A1,1,0,0,0,16,5Zm4,14a1,1,0,1,0,1,1A1,1,0,0,0,20,19ZM4,15a1,1,0,1,0,1,1A1,1,0,0,0,4,15Zm16,0a1,1,0,1,0,1,1A1,1,0,0,0,20,15Zm-4,4a1,1,0,1,0,1,1A1,1,0,0,0,16,19Zm5-7a1,1,0,0,0-1-1H13V4a1,1,0,0,0-2,0v7H4a1,1,0,0,0,0,2h7v7a1,1,0,0,0,2,0V13h7A1,1,0,0,0,21,12ZM8,19a1,1,0,1,0,1,1A1,1,0,0,0,8,19Z'
    }));
};

export default McBorderInner;