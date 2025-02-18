import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McBellSlash = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M11.07,6.12A3.48,3.48,0,0,1,12,6a4,4,0,0,1,4,4v1.34a1,1,0,0,0,2,0V10a6,6,0,0,0-5-5.91V3a1,1,0,0,0-2,0V4.1l-.45.08a1,1,0,0,0,.52,1.94ZM21.71,20.29l-18-18A1,1,0,0,0,2.29,3.71L6.41,7.82A6,6,0,0,0,6,10v3.18A3,3,0,0,0,4,16v2a1,1,0,0,0,1,1H8.14a4,4,0,0,0,7.72,0h1.73l2.7,2.71a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM8,10a3.31,3.31,0,0,1,0-.55L11.59,13H8Zm4,10a2,2,0,0,1-1.72-1h3.44A2,2,0,0,1,12,20ZM6,17V16a1,1,0,0,1,1-1h6.59l2,2Z'
    }));
};

export default McBellSlash;