import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McSunset = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M17.66,8.34a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,6.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,8.34ZM12,6a1,1,0,0,0,1-1V4a1,1,0,0,0-2,0V5A1,1,0,0,0,12,6ZM4,12H3a1,1,0,0,0,0,2H4a1,1,0,0,0,0-2ZM5.64,8.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,7.34ZM21,12H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM11,19H8a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Zm7-4h-.88a5.39,5.39,0,0,0,.38-2,5.5,5.5,0,0,0-11,0,5.39,5.39,0,0,0,.38,2H6a1,1,0,0,0,0,2H18a1,1,0,0,0,0-2Zm-3.15,0H9.15a3.44,3.44,0,0,1-.65-2,3.5,3.5,0,0,1,7,0A3.44,3.44,0,0,1,14.85,15ZM16,19H15a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Z'
    }));
};

export default McSunset;