import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McLamp = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M18,2.78A1,1,0,0,0,17,2H7a1,1,0,0,0-1,.78l-2,9a1,1,0,0,0,.2.85A1,1,0,0,0,5,13H8.94A8.26,8.26,0,0,1,9,14a8.92,8.92,0,0,1-2.57,6.3A1,1,0,0,0,7.14,22h9.72a1,1,0,0,0,.71-1.7A8.92,8.92,0,0,1,15,14a8.26,8.26,0,0,1,.06-1H16v2a1,1,0,0,0,2,0V13h1a1,1,0,0,0,.78-.37,1,1,0,0,0,.2-.85ZM9.22,20A10.9,10.9,0,0,0,11,14c0-.33,0-.67-.05-1h2.1c0,.33-.05.67-.05,1a10.9,10.9,0,0,0,1.78,6Zm-3-9L7.8,4h8.4l1.55,7Z'
    }));
};

export default McLamp;