import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McChannel = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M20,16a3,3,0,0,0-1.73.56l-2.45-1.45A3.74,3.74,0,0,0,16,14a4,4,0,0,0-3-3.86V7.82a3,3,0,1,0-2,0v2.32A4,4,0,0,0,8,14a3.74,3.74,0,0,0,.18,1.11L5.73,16.56A3,3,0,0,0,4,16a3,3,0,1,0,3,3,3,3,0,0,0-.12-.8l2.3-1.37a4,4,0,0,0,5.64,0l2.3,1.37A3,3,0,1,0,20,16ZM4,20a1,1,0,1,1,1-1A1,1,0,0,1,4,20ZM12,4a1,1,0,1,1-1,1A1,1,0,0,1,12,4Zm0,12a2,2,0,1,1,2-2A2,2,0,0,1,12,16Zm8,4a1,1,0,1,1,1-1A1,1,0,0,1,20,20Z'
    }));
};

export default McChannel;