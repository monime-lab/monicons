import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McPoundCircle = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M16,15H10.82A3,3,0,0,0,11,14V13h2.5a1,1,0,0,0,0-2H11V10a1.95,1.95,0,0,1,3.63-1,1,1,0,0,0,1.74-1A4,4,0,0,0,9,10V11H8a1,1,0,0,0,0,2H9v1a1,1,0,0,1-1,1,1,1,0,0,0,0,2h8a1,1,0,0,0,0-2ZM12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z'
    }));
};

export default McPoundCircle;