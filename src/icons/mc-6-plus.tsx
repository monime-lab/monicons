import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const Mc6Plus = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M18,5h1V6a1,1,0,0,0,2,0V5h1a1,1,0,0,0,0-2H21V2a1,1,0,0,0-2,0V3H18a1,1,0,0,0,0,2ZM11.5,8h1a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3h-1a3,3,0,0,0-3,3v6a3,3,0,0,0,3,3h1a3,3,0,0,0,3-3V14a3,3,0,0,0-3-3h-2V9A1,1,0,0,1,11.5,8Zm1,5a1,1,0,0,1,1,1v1a1,1,0,0,1-1,1h-1a1,1,0,0,1-1-1V13Zm9.1-4a1,1,0,0,0-.78,1.18,9,9,0,1,1-7-7,1,1,0,1,0,.4-2A10.8,10.8,0,0,0,12,1,11,11,0,1,0,23,12a10.8,10.8,0,0,0-.22-2.2A1,1,0,0,0,21.6,9Z'
    }));
};

export default Mc6Plus;