import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McDizzyMeh = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M9,11.71l.29-.3.29.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-.3-.29.3-.29A1,1,0,0,0,9.54,8.29l-.29.3L9,8.29A1,1,0,1,0,7.54,9.71l.3.29-.3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0ZM15,14H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM17,8.29a1,1,0,0,0-1.42,0l-.29.3L15,8.29a1,1,0,0,0-1.42,1.42l.3.29-.3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l.29-.3.29.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-.3-.29.3-.29A1,1,0,0,0,17,8.29Z'
    }));
};

export default McDizzyMeh;