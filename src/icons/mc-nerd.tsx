import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McNerd = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21.41,8.65s0,0,0-.06A10,10,0,0,0,2.63,8.53a.85.85,0,0,0-.08.24A9.87,9.87,0,0,0,2,12,10,10,0,1,0,21.41,8.65ZM12,4a8,8,0,0,1,6.92,4h-1.2a3,3,0,0,0-4.62.22A3.17,3.17,0,0,0,12,8a3.17,3.17,0,0,0-1.1.22A3,3,0,0,0,6.28,8H5.08A8,8,0,0,1,12,4Zm4.5,6a1,1,0,1,1-1-1A1,1,0,0,1,16.5,10Zm-7,0a1,1,0,1,1-1-1A1,1,0,0,1,9.5,10ZM12,20a8,8,0,0,1-8-8,8.24,8.24,0,0,1,.26-2H5.5a3,3,0,0,0,6,.18,1,1,0,0,1,1,0,3,3,0,0,0,6-.18h1.24A8.24,8.24,0,0,1,20,12,8,8,0,0,1,12,20Zm2.36-5.77a3.76,3.76,0,0,1-4.72,0,1,1,0,0,0-1.28,1.54,5.68,5.68,0,0,0,7.28,0,1,1,0,1,0-1.28-1.54Z'
    }));
};

export default McNerd;