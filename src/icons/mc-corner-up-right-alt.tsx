import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCornerUpRightAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M19.92,10.12a1,1,0,0,0-.21-.33l-3-3a1,1,0,1,0-1.42,1.42l1.3,1.29H7a3,3,0,0,0-3,3v4a1,1,0,0,0,2,0v-4a1,1,0,0,1,1-1h9.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3a1,1,0,0,0,.21-.33A1,1,0,0,0,19.92,10.12Z'
    }));
};

export default McCornerUpRightAlt;