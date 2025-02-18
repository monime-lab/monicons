import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McWaterGlass = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M18.08,7A1,1,0,0,0,17,7.92l-.35,4.55a2.67,2.67,0,0,1-1.2-.77,1,1,0,0,0-1.5,0,2.65,2.65,0,0,1-3.9,0,1,1,0,0,0-1.5,0,2.7,2.7,0,0,1-1.2.77L7,7.92A1,1,0,0,0,5.92,7,1,1,0,0,0,5,8.08l.86,11.15a3,3,0,0,0,3,2.77h6.3a3,3,0,0,0,3-2.77L19,8.08A1,1,0,0,0,18.08,7ZM16.14,19.08a1,1,0,0,1-1,.92H8.85a1,1,0,0,1-1-.92L7.5,14.5a4.77,4.77,0,0,0,1.8-.79,4.66,4.66,0,0,0,5.4,0,4.77,4.77,0,0,0,1.8.79ZM12,10a3.26,3.26,0,0,0,3.25-3.25c0-2.75-2.58-4.51-2.69-4.58a1,1,0,0,0-1.12,0C11.33,2.25,8.75,4,8.75,6.75A3.26,3.26,0,0,0,12,10Zm0-5.7a3.61,3.61,0,0,1,1.25,2.45,1.25,1.25,0,0,1-2.5,0A3.66,3.66,0,0,1,12,4.3Z'
    }));
};

export default McWaterGlass;