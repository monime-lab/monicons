import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McBorderClear = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M8,11a1,1,0,1,0,1,1A1,1,0,0,0,8,11Zm0,8a1,1,0,1,0,1,1A1,1,0,0,0,8,19Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,12,19ZM4,3A1,1,0,1,0,5,4,1,1,0,0,0,4,3Zm0,8a1,1,0,1,0,1,1A1,1,0,0,0,4,11ZM20,5a1,1,0,1,0-1-1A1,1,0,0,0,20,5ZM4,19a1,1,0,1,0,1,1A1,1,0,0,0,4,19Zm8-4a1,1,0,1,0,1,1A1,1,0,0,0,12,15ZM4,15a1,1,0,1,0,1,1A1,1,0,0,0,4,15ZM4,7A1,1,0,1,0,5,8,1,1,0,0,0,4,7ZM8,3A1,1,0,1,0,9,4,1,1,0,0,0,8,3ZM20,15a1,1,0,1,0,1,1A1,1,0,0,0,20,15Zm0,4a1,1,0,1,0,1,1A1,1,0,0,0,20,19ZM20,7a1,1,0,1,0,1,1A1,1,0,0,0,20,7Zm-8,4a1,1,0,1,0,1,1A1,1,0,0,0,12,11Zm8,0a1,1,0,1,0,1,1A1,1,0,0,0,20,11ZM16,3a1,1,0,1,0,1,1A1,1,0,0,0,16,3ZM12,3a1,1,0,1,0,1,1A1,1,0,0,0,12,3Zm0,4a1,1,0,1,0,1,1A1,1,0,0,0,12,7Zm4,12a1,1,0,1,0,1,1A1,1,0,0,0,16,19Zm0-8a1,1,0,1,0,1,1A1,1,0,0,0,16,11Z'
    }));
};

export default McBorderClear;