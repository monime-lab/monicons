import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McDiceFive = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M17,2H7A5,5,0,0,0,2,7V17a5,5,0,0,0,5,5H17a5,5,0,0,0,5-5V7A5,5,0,0,0,17,2Zm3,15a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V7A3,3,0,0,1,7,4H17a3,3,0,0,1,3,3ZM8,15a1,1,0,1,0,1,1A1,1,0,0,0,8,15Zm4-4a1,1,0,1,0,1,1A1,1,0,0,0,12,11ZM8,7A1,1,0,1,0,9,8,1,1,0,0,0,8,7Zm8,8a1,1,0,1,0,1,1A1,1,0,0,0,16,15Zm0-8a1,1,0,1,0,1,1A1,1,0,0,0,16,7Z'
    }));
};

export default McDiceFive;