import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McRssAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M2.88,16.88a3,3,0,1,0,4.24,4.24h0a3,3,0,0,0,0-4.24A3.08,3.08,0,0,0,2.88,16.88Zm2.83,2.83h0a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42,1,1,0,0,1,1.42,0A1,1,0,0,1,5.71,19.71ZM5,12a1,1,0,0,0,0,2,5,5,0,0,1,5,5,1,1,0,0,0,2,0A7,7,0,0,0,5,12ZM5,8a1,1,0,0,0,0,2,9,9,0,0,1,9,9,1,1,0,0,0,2,0A11,11,0,0,0,5,8Z'
    }));
};

export default McRssAlt;