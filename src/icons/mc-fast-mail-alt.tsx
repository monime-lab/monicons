import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFastMailAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M15.69,9a2.93,2.93,0,0,0-1-1.71v0h0a3,3,0,0,0-2-.74H4.8A3,3,0,0,0,2.5,7.57h0l0,0,0,.06A3,3,0,0,0,1.84,10l.88,5a3,3,0,0,0,3,2.48h7.94a3,3,0,0,0,2.29-1.07A3,3,0,0,0,16.57,14ZM12.28,8.5,9.94,11.14a1,1,0,0,1-1.38.11L5.17,8.5Zm2.1,6.64a1,1,0,0,1-.76.36H5.68a1,1,0,0,1-1-.83L3.87,10,7.3,12.8a3,3,0,0,0,4.14-.34L13.8,9.8l.8,4.53A1,1,0,0,1,14.38,15.14Zm6.83-4.64h-2a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Zm0-2a1,1,0,0,0,0-2h-3a1,1,0,0,0,0,2Z'
    }));
};

export default McFastMailAlt;