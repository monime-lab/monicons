import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McSadDizzy = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M9,11.71l.29-.3.29.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-.3-.29.3-.29A1,1,0,0,0,9.54,8.29l-.29.3L9,8.29A1,1,0,1,0,7.54,9.71l.3.29-.3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0Zm-.6,3.62a1,1,0,0,0-.13,1.4,1,1,0,0,0,1.41.13,3.76,3.76,0,0,1,4.72,0,1,1,0,0,0,1.41-.13,1,1,0,0,0-.13-1.4A5.81,5.81,0,0,0,8.36,15.33ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM17,8.29a1,1,0,0,0-1.42,0l-.29.3L15,8.29a1,1,0,0,0-1.42,1.42l.3.29-.3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l.29-.3.29.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-.3-.29.3-.29A1,1,0,0,0,17,8.29Z'
    }));
};

export default McSadDizzy;