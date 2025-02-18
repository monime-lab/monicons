import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McParcel = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M7,14H9a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Zm6,2H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM19,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM14,4V7.29l-1.51-.84a1,1,0,0,0-1,0L10,7.29V4Zm6,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H8V9a1,1,0,0,0,.5.86,1,1,0,0,0,1,0L12,8.47l2.51,1.4A1,1,0,0,0,15,10a1,1,0,0,0,1-1V4h3a1,1,0,0,1,1,1Z'
    }));
};

export default McParcel;