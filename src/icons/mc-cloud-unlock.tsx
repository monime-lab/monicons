import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCloudUnlock = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M14,15.5H11v-1A1,1,0,0,1,12.88,14a1,1,0,0,0,1.37.34A1,1,0,0,0,14.59,13a3.08,3.08,0,0,0-.46-.59A3,3,0,0,0,12,11.5a3,3,0,0,0-3,3v1.18a3,3,0,0,0,1,5.82h4a3,3,0,0,0,0-6Zm0,4H10a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2ZM18.42,6.72A7,7,0,0,0,5.06,8.61a4,4,0,0,0-.38,7.66,1.13,1.13,0,0,0,.32.05,1,1,0,0,0,.32-2A2,2,0,0,1,4,12.5a2,2,0,0,1,2-2,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67,3,3,0,0,1,1,5.53,1,1,0,1,0,1,1.74A5,5,0,0,0,22,11.5,5,5,0,0,0,18.42,6.72Z'
    }));
};

export default McCloudUnlock;