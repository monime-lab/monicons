import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McServers = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M15,17a1,1,0,1,0,1,1A1,1,0,0,0,15,17Zm-4,0H9a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Zm0-6H9a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,15,11Zm8-3a3,3,0,0,0-3-3H19a3,3,0,0,0-3-3H8A3,3,0,0,0,5,5H4A3,3,0,0,0,1,8v2a3,3,0,0,0,.78,2A3,3,0,0,0,1,14v2a3,3,0,0,0,3,3H5a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3h1a3,3,0,0,0,3-3V14a3,3,0,0,0-.78-2A3,3,0,0,0,23,10ZM5,17H4a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1H5a3,3,0,0,0,.78,2A3,3,0,0,0,5,17Zm0-6H4a1,1,0,0,1-1-1V8A1,1,0,0,1,4,7H5a3,3,0,0,0,.78,2A3,3,0,0,0,5,11Zm12,8a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V17a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1Zm0-6a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1Zm0-6a1,1,0,0,1-1,1H8A1,1,0,0,1,7,7V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Zm4,9a1,1,0,0,1-1,1H19a3,3,0,0,0-.78-2A3,3,0,0,0,19,13h1a1,1,0,0,1,1,1Zm0-6a1,1,0,0,1-1,1H19a3,3,0,0,0-.78-2A3,3,0,0,0,19,7h1a1,1,0,0,1,1,1ZM15,5a1,1,0,1,0,1,1A1,1,0,0,0,15,5ZM11,5H9A1,1,0,0,0,9,7h2a1,1,0,0,0,0-2Z'
    }));
};

export default McServers;