import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McBellSchool = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21,8a2,2,0,1,0-2.27,2,4.49,4.49,0,0,1-3,5.85,3,3,0,0,0-1.3-1.43,7,7,0,1,0-10.9,0A3,3,0,0,0,2,17v1a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3v-.19a6.47,6.47,0,0,0,4.58-8.59A2,2,0,0,0,21,8ZM14,18a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V17a1,1,0,0,1,1-1h.41a6.94,6.94,0,0,0,7.18,0H13a1,1,0,0,1,1,1ZM9,15a5,5,0,1,1,5-5A5,5,0,0,1,9,15ZM9,9a1,1,0,1,0,1,1A1,1,0,0,0,9,9Z'
    }));
};

export default McBellSchool;