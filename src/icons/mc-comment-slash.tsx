import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCommentSlash = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M10.19,5.23A7.12,7.12,0,0,1,12,5a7,7,0,0,1,7,7,7.12,7.12,0,0,1-.23,1.81,1,1,0,0,0,.7,1.23,1.15,1.15,0,0,0,.26,0,1,1,0,0,0,1-.74A8.91,8.91,0,0,0,21,12a9,9,0,0,0-9-9,8.91,8.91,0,0,0-2.33.3A1,1,0,0,0,9,4.53,1,1,0,0,0,10.19,5.23ZM21.71,20.29l-18-18A1,1,0,0,0,2.29,3.71L5,6.38A9,9,0,0,0,5,17.62L3.29,19.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,4,21h8a9,9,0,0,0,5.62-2l2.67,2.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM12,19H6.41l.64-.63a1,1,0,0,0,0-1.41A7,7,0,0,1,6.4,7.81l9.79,9.79A7,7,0,0,1,12,19Z'
    }));
};

export default McCommentSlash;