import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McPrintSlash = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M7,10a1,1,0,1,0,1,1A1,1,0,0,0,7,10ZM3.71,2.29A1,1,0,0,0,2.29,3.71L4.62,6A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3H6v3a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V19.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM6,15v1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H6.59l6,6H7A1,1,0,0,0,6,15Zm10,5H8V16h6.59L16,17.41ZM19,6H18V3a1,1,0,0,0-1-1H8.66a1,1,0,0,0,0,2H16V6H12.66a1,1,0,0,0,0,2H19a1,1,0,0,1,1,1v6a.37.37,0,0,1,0,.11,1,1,0,0,0,.78,1.18l.2,0a1,1,0,0,0,1-.8A2.84,2.84,0,0,0,22,15V9A3,3,0,0,0,19,6Z'
    }));
};

export default McPrintSlash;