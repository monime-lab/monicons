import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McAlignCenterJustify = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21,15H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM3,5H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,5ZM17,19H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2ZM21,7H3A1,1,0,0,0,3,9H21a1,1,0,0,0,0-2Zm0,4H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z'
    }));
};

export default McAlignCenterJustify;