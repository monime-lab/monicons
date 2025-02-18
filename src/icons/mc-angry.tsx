import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McAngry = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M10,11a1,1,0,0,0,.89-.55,1,1,0,0,0-.44-1.34l-2-1a1,1,0,1,0-.9,1.78l2,1A.93.93,0,0,0,10,11Zm2-9A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM8.36,15.33a1,1,0,0,0-.13,1.4,1,1,0,0,0,1.41.13,3.76,3.76,0,0,1,4.72,0,1,1,0,0,0,.64.23,1,1,0,0,0,.64-1.76A5.81,5.81,0,0,0,8.36,15.33Zm7.19-7.22-2,1a1,1,0,0,0-.44,1.34A1,1,0,0,0,14,11a.93.93,0,0,0,.45-.11l2-1a1,1,0,0,0-.9-1.78Z'
    }));
};

export default McAngry;