import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCloudCheck = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M14.29,14.19,11,17.48,9.71,16.19a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l2,2a1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,0-1.41A1,1,0,0,0,14.29,14.19Zm4.13-5.87a7,7,0,0,0-13.36,1.9,4,4,0,0,0-.38,7.65A1,1,0,1,0,5.32,16,2,2,0,0,1,4,14.1a2,2,0,0,1,2-2,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.6,1,1,0,0,0,.78.66A3,3,0,0,1,17.75,16,1,1,0,0,0,18,18l.25,0a5,5,0,0,0,.17-9.62Z'
    }));
};

export default McCloudCheck;