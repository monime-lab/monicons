import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCommentCheck = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M13.29,7.13a1,1,0,0,0,0,1.42l1.92,1.92a1,1,0,0,0,1.42,0l4.08-4.08A1,1,0,1,0,19.29,5L15.92,8.35,14.71,7.13A1,1,0,0,0,13.29,7.13Zm6.62,3.51A1,1,0,0,0,19,11.72,2.62,2.62,0,0,1,19,12a7,7,0,0,1-7,7H6.41l.64-.63a1,1,0,0,0,0-1.41A7,7,0,0,1,10.53,5.15a7.14,7.14,0,0,1,2.8,0,1,1,0,1,0,.4-2,9.15,9.15,0,0,0-3.61,0A9.05,9.05,0,0,0,3,12a9,9,0,0,0,2,5.62L3.29,19.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,4,21h8a9,9,0,0,0,9-9c0-.15,0-.29,0-.44A1,1,0,0,0,19.91,10.64Z'
    }));
};

export default McCommentCheck;