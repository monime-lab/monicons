import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McSkipForwardCircle = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M15.5,7a1,1,0,0,0-1,1V9.69l-4-2.31a2,2,0,0,0-3,1.73v5.78a2,2,0,0,0,1,1.73,2,2,0,0,0,2,0l4-2.31V16a1,1,0,0,0,2,0V8A1,1,0,0,0,15.5,7Zm-1,5-5,2.89V9.11l5,2.88ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
    }));
};

export default McSkipForwardCircle;