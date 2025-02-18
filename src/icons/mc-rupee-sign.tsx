import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McRupeeSign = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M18,7H15.79a5.49,5.49,0,0,0-1-2H18a1,1,0,0,0,0-2H7A1,1,0,0,0,7,5h3.5a3.5,3.5,0,0,1,3.15,2H7A1,1,0,0,0,7,9h7a3.5,3.5,0,0,1-3.45,3H7a.7.7,0,0,0-.14,0,.65.65,0,0,0-.2,0,.69.69,0,0,0-.19.1l-.12.07,0,0a.75.75,0,0,0-.14.17,1.1,1.1,0,0,0-.09.14.61.61,0,0,0,0,.18A.65.65,0,0,0,6,13s0,0,0,0a.7.7,0,0,0,0,.14.65.65,0,0,0,0,.2.69.69,0,0,0,.1.19s0,.08.07.12l6,7a1,1,0,0,0,1.52-1.3L9.18,14H10.5A5.5,5.5,0,0,0,16,9h2a1,1,0,0,0,0-2Z'
    }));
};

export default McRupeeSign;