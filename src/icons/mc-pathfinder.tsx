import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McPathfinder = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M4,14.46a1,1,0,0,0-2,0v1a1,1,0,0,0,1,1H4a1,1,0,0,0,0-2ZM8.18,4h2.1a1,1,0,0,0,0-2H8.18a1,1,0,0,0,0,2Zm6.28,0a1,1,0,0,0,2,0V3a1,1,0,0,0-1-1h-1a1,1,0,0,0,0,2ZM4,2H3A1,1,0,0,0,2,3V4A1,1,0,0,0,4,4,1,1,0,0,0,4,2ZM3,11.28a1,1,0,0,0,1-1V8.18a1,1,0,0,0-2,0v2.1A1,1,0,0,0,3,11.28ZM15.82,20h-2.1a1,1,0,1,0,0,2h2.1a1,1,0,0,0,0-2ZM21,7.54H20a1,1,0,0,0,0,2,1,1,0,0,0,2,0v-1A1,1,0,0,0,21,7.54Zm0,5.18a1,1,0,0,0-1,1v2.1a1,1,0,0,0,2,0v-2.1A1,1,0,0,0,21,12.72ZM16.46,7.54a1,1,0,1,0-2,0H8.54a1,1,0,0,0-1,1v5.92a1,1,0,1,0,0,2,1,1,0,0,0,2,0h5.92a1,1,0,0,0,1-1V9.54a1,1,0,1,0,0-2Zm-2,6.92H9.54V9.54h4.92ZM21,19a1,1,0,0,0-1,1,1,1,0,0,0,0,2h1a1,1,0,0,0,1-1V20A1,1,0,0,0,21,19ZM9.54,20a1,1,0,0,0-2,0v1a1,1,0,0,0,1,1h1a1,1,0,0,0,0-2Z'
    }));
};

export default McPathfinder;