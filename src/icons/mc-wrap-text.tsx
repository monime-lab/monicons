import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McWrapText = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M3,7H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,7Zm6,8H3a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2Zm9.5-5H3a1,1,0,0,0,0,2H18.5a1.5,1.5,0,0,1,0,3H15.41l.3-.29a1,1,0,0,0-1.42-1.42l-2,2a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l2,2a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-.3-.29H18.5a3.5,3.5,0,0,0,0-7Z'
    }));
};

export default McWrapText;