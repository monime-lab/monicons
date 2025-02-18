import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McEnvelopeMinus = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21,8a1,1,0,0,0-1,1v8a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0l3.59-3.58a1,1,0,0,0-1.42-1.42l-3.58,3.59a1,1,0,0,1-1.42,0L5.41,6H13a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9A1,1,0,0,0,21,8ZM17,6h4a1,1,0,0,0,0-2H17a1,1,0,0,0,0,2Z'
    }));
};

export default McEnvelopeMinus;