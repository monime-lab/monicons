import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCloudHail = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M12,17a1,1,0,1,0,1,1A1,1,0,0,0,12,17ZM8,11a1,1,0,1,0,1,1A1,1,0,0,0,8,11Zm4,2a1,1,0,1,0,1,1A1,1,0,0,0,12,13ZM8,19a1,1,0,1,0,1,1A1,1,0,0,0,8,19Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,8,15Zm8,0a1,1,0,1,0,1,1A1,1,0,0,0,16,15ZM12,9a1,1,0,1,0,1,1A1,1,0,0,0,12,9Zm4,2a1,1,0,1,0,1,1A1,1,0,0,0,16,11Zm2.42-4.78A7,7,0,0,0,5.06,8.11,4,4,0,0,0,2,12a4,4,0,0,0,1.34,3,1,1,0,1,0,1.32-1.5A2,2,0,0,1,4,12a2,2,0,0,1,2-2A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67A3,3,0,0,1,20,11a2.91,2.91,0,0,1-.74,2,1,1,0,0,0,1.48,1.34,5,5,0,0,0-2.32-8.08ZM16,19a1,1,0,1,0,1,1A1,1,0,0,0,16,19Z'
    }));
};

export default McCloudHail;