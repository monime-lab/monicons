import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McThunderstorm = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M13.5,15H11.23l1.45-2.5a1,1,0,1,0-1.74-1l-2.31,4a1,1,0,0,0,0,1,1,1,0,0,0,.87.5h2.27l-1.45,2.5a1,1,0,0,0,1.74,1l2.31-4a1,1,0,0,0,0-1A1,1,0,0,0,13.5,15Zm4.92-7.79A7,7,0,0,0,5.06,9.11,4,4,0,0,0,6,17a1,1,0,0,0,0-2,2,2,0,0,1,0-4,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.66A3,3,0,0,1,17,15a1,1,0,0,0,0,2,5,5,0,0,0,1.42-9.79Z'
    }));
};

export default McThunderstorm;