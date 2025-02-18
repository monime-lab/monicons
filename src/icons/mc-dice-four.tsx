import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McDiceFour = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M15,14a1,1,0,1,0,1,1A1,1,0,0,0,15,14ZM9,8a1,1,0,1,0,1,1A1,1,0,0,0,9,8Zm0,6a1,1,0,1,0,1,1A1,1,0,0,0,9,14Zm6-6a1,1,0,1,0,1,1A1,1,0,0,0,15,8Zm2-6H7A5,5,0,0,0,2,7V17a5,5,0,0,0,5,5H17a5,5,0,0,0,5-5V7A5,5,0,0,0,17,2Zm3,15a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V7A3,3,0,0,1,7,4H17a3,3,0,0,1,3,3Z'
    }));
};

export default McDiceFour;