import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFont = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21,20H20V3a1,1,0,0,0-1-1H15.5a1,1,0,0,0-.86.5L4.43,20H3a1,1,0,0,0,0,2H7a1,1,0,0,0,0-2H6.74l3.5-6H18v6H17a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-3-8H11.41l4.66-8H18Z'
    }));
};

export default McFont;