import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCloudWifi = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M8.5,5.94a7.1,7.1,0,0,1,7,0,1,1,0,0,0,1.37-.37,1,1,0,0,0-.37-1.36,9.14,9.14,0,0,0-9,0,1,1,0,0,0-.37,1.36A1,1,0,0,0,8.5,5.94Zm9.92,5.27a5.91,5.91,0,0,0-.36-.71,1,1,0,0,0-1.38-.33,1,1,0,0,0-.33,1.37,4.58,4.58,0,0,1,.38.84,1,1,0,0,0,.78.67A3,3,0,0,1,20,16a3,3,0,0,1-3,3L5.66,19A2,2,0,0,1,4,17.4,2,2,0,0,1,6,15a1,1,0,0,0,1-1,4.92,4.92,0,0,1,.67-2.49,1,1,0,0,0-.37-1.37,1,1,0,0,0-1.36.37,6.75,6.75,0,0,0-.88,2.6,4,4,0,0,0-2.13,1.33A4,4,0,0,0,5.46,21h.13L17,21a5,5,0,0,0,1.42-9.79ZM14.87,9s0,0,0-.06A.92.92,0,0,0,15,8.74a1,1,0,0,0-.57-1.29,6.36,6.36,0,0,0-1.74-.38c-.1,0-.2,0-.3,0a5.47,5.47,0,0,0-.81,0,3,3,0,0,0-.31,0,6.36,6.36,0,0,0-1.74.38A1,1,0,0,0,9,8.74a1.22,1.22,0,0,0,.12.19.61.61,0,0,0,0,.11,1,1,0,0,0,1.37.36,3.08,3.08,0,0,1,3,0A1,1,0,0,0,14.87,9ZM11,12a1,1,0,1,0,1-1A1,1,0,0,0,11,12Z'
    }));
};

export default McCloudWifi;