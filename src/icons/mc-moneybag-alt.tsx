import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McMoneybagAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M19,7H16V6a3,3,0,0,0-3-3H11A3,3,0,0,0,8,6V7H5a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM10,6a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V7H10ZM4,10A1,1,0,0,1,5,9H6a2,2,0,0,1-2,2Zm1,9a1,1,0,0,1-1-1V17a2,2,0,0,1,2,2Zm15-1a1,1,0,0,1-1,1H18a2,2,0,0,1,2-2Zm0-3a4,4,0,0,0-4,4H8a4,4,0,0,0-4-4V13A4,4,0,0,0,8,9h8a4,4,0,0,0,4,4Zm0-4a2,2,0,0,1-2-2h1a1,1,0,0,1,1,1Zm-8,0a3,3,0,1,0,3,3A3,3,0,0,0,12,11Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,15Z'
    }));
};

export default McMoneybagAlt;