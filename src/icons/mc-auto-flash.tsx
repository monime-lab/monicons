import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McAutoFlash = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M17.87,8.6A1,1,0,0,0,17,8H12.42l1.27-4.74a1,1,0,0,0-.17-.87,1,1,0,0,0-.8-.39h-7a1,1,0,0,0-1,.74l-2.68,10a1,1,0,0,0,1,1.26H6.89L5.08,20.74a1,1,0,0,0,1.71.93l10.9-12A1,1,0,0,0,17.87,8.6ZM8.08,17.28l1.08-4A1,1,0,0,0,9,12.39,1,1,0,0,0,8.19,12H4.35L6.49,4h4.93L10.15,8.74a1,1,0,0,0,1,1.26h3.57ZM19,13H18a3,3,0,0,0-3,3v5a1,1,0,0,0,2,0V19h3v2a1,1,0,0,0,2,0V16A3,3,0,0,0,19,13Zm1,4H17V16a1,1,0,0,1,1-1h1a1,1,0,0,1,1,1Z'
    }));
};

export default McAutoFlash;