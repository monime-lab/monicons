import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McLineSpacing = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M6.29,9.71a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-2-2a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-2,2A1,1,0,0,0,3.71,9.71L4,9.41v5.18l-.29-.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l2-2a1,1,0,0,0-1.42-1.42l-.29.3V9.41ZM11,8H21a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Zm10,3H11a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0,5H11a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z'
    }));
};

export default McLineSpacing;