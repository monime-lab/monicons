import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McMailboxAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M11,13h2a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Zm8,7H18V9h1a1,1,0,0,0,0-2H17.91A6,6,0,0,0,6.09,7H5A1,1,0,0,0,5,9H6V20H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2ZM12,4a4,4,0,0,1,3.86,3H8.14A4,4,0,0,1,12,4Zm4,16H8V18h8Zm0-4H8V9h8Z'
    }));
};

export default McMailboxAlt;