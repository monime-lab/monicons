import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCornerUpRight = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M19.61,7.25a1,1,0,0,0-.22-.33L14.76,2.29a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l2.92,2.92h-8a4,4,0,0,0-4,4V21a1,1,0,0,0,2,0V10.63a2,2,0,0,1,2-2h8l-2.92,2.92a1,1,0,0,0,.71,1.71,1,1,0,0,0,.7-.3l4.63-4.62A1.19,1.19,0,0,0,19.61,8,1,1,0,0,0,19.61,7.25Z'
    }));
};

export default McCornerUpRight;