import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McAdjust = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM11,19.93A8,8,0,0,1,11,4.07Zm2,0V4.07a8,8,0,0,1,0,15.86Z'
    }));
};

export default McAdjust;