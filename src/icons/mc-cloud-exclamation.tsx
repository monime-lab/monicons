import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCloudExclamation = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M12.71,18.79a1.15,1.15,0,0,0-.33-.21,1,1,0,0,0-1.09.21,1.05,1.05,0,0,0-.29.71,1,1,0,0,0,.29.71,1.15,1.15,0,0,0,.33.21,1,1,0,0,0,1.3-1.3A1,1,0,0,0,12.71,18.79ZM12,12.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,12.5Zm6.42-4.79A7,7,0,0,0,5.06,9.61,4,4,0,0,0,6,17.5H8a1,1,0,0,0,0-2H6a2,2,0,0,1,0-4,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.66A3,3,0,0,1,17,15.5H16a1,1,0,0,0,0,2h1a5,5,0,0,0,1.42-9.79Z'
    }));
};

export default McCloudExclamation;