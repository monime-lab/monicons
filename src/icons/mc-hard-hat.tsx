import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McHardHat = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M20,13.17V13a8,8,0,0,0-2.42-5.74A7.84,7.84,0,0,0,14.4,5.38l-.05,0A8.24,8.24,0,0,0,11.76,5,8.21,8.21,0,0,0,4,13.17,3,3,0,0,0,5,19H19a3,3,0,0,0,1-5.83ZM19,17H5a1,1,0,0,1,0-2H7a1,1,0,0,0,0-2H6A6.41,6.41,0,0,1,9,7.85V11a1,1,0,0,0,2,0V7.09A7.34,7.34,0,0,1,11.82,7H12a5.56,5.56,0,0,1,1,.1V11a1,1,0,0,0,2,0V7.82a6.65,6.65,0,0,1,1.18.87A6,6,0,0,1,18,13H17a1,1,0,0,0,0,2h2a1,1,0,0,1,0,2Z'
    }));
};

export default McHardHat;