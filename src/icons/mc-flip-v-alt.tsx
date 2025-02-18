import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFlipVAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M4.94,12.24A1,1,0,0,0,3.73,13l-.49,1.94A1,1,0,0,0,4,16.12a1,1,0,0,0,1.21-.73l.49-1.94A1,1,0,0,0,4.94,12.24Zm17,7.52-4-16A1,1,0,0,0,17,3H14a1,1,0,0,0-1,1V20a1,1,0,0,0,1,1h7a1,1,0,0,0,.79-.38A1,1,0,0,0,22,19.76ZM15,19V5h1.22l3.5,14ZM6.4,6.42a1,1,0,0,0-1.22.73L4.7,9.09a1,1,0,0,0,.73,1.21l.24,0a1,1,0,0,0,1-.76l.48-1.94A1,1,0,0,0,6.4,6.42ZM7.51,5h2a1,1,0,0,0,0-2h-2a1,1,0,0,0,0,2ZM4.24,19a1,1,0,0,0-2-.24l-.24,1a1,1,0,0,0,.18.86A1,1,0,0,0,3,21H4a1,1,0,0,0,.24-2ZM10,6.51a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0v-2A1,1,0,0,0,10,6.51Zm0,6a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0v-2A1,1,0,0,0,10,12.51Zm0,6a1,1,0,0,0-.86.49H8a1,1,0,0,0,0,2h2a1,1,0,0,0,1-1v-.49A1,1,0,0,0,10,18.51Z'
    }));
};

export default McFlipVAlt;